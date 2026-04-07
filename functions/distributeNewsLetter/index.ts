import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

interface NewsletterData {
  _id: string
  title: string
  slug: { current: string }
  body: any[] // Portable Text blocks
  thumbnail?: {
    asset: {
      _ref: string
    }
  }
}

function buildEmailHtml(newsletter: NewsletterData, recipientEmail: string, thumbnailUrl?: string): string {
  let bodyHtml = ''
  try {
    bodyHtml = toHTML(newsletter.body ?? [])
  } catch {
    bodyHtml = '<p>Check out our latest newsletter.</p>'
  }

  const thumbnailBlock = thumbnailUrl
    ? `<img src="${thumbnailUrl}" alt="${newsletter.title}" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:24px;" />`
    : ''

  const unsubscribeUrl = `https://shalonceroyal.com/side-a/unsubscribe?email=${encodeURIComponent(recipientEmail)}`

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding:32px 40px 16px;">
              <img src="${process.env.LOGO_URL ?? ''}" alt="Logo" style="max-width:180px;height:auto;" />
            </td>
          </tr>
          <!-- Title -->
          <tr>
            <td align="center" style="padding:0 40px 24px;">
              <h1 style="margin:0;font-size:28px;color:#1a1a1a;">${newsletter.title}</h1>
            </td>
          </tr>
          <!-- Thumbnail -->
          ${thumbnailBlock ? `<tr><td align="center" style="padding:0 40px 24px;">${thumbnailBlock}</td></tr>` : ''}
          <!-- Body -->
          <tr>
            <td style="padding:0 40px 40px;font-size:16px;line-height:1.6;color:#333333;">
              ${bodyHtml}
            </td>
          </tr>
          <!-- Unsubscribe -->
          <tr>
            <td align="center" style="padding:0 40px 32px;">
              <a href="${unsubscribeUrl}" style="color:#999999;font-size:12px;text-decoration:underline;">Unsubscribe</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export const handler = documentEventHandler<NewsletterData>(async ({ context, event }) => {
  const { data } = event

  if (!data?.title) {
    console.log('No newsletter data found, skipping.')
    return
  }

  const MAILERSEND_API_KEY = process.env.MAILERSEND_API_KEY
  const FROM_EMAIL = process.env.FROM_EMAIL
  const FROM_NAME = process.env.FROM_NAME ?? 'Newsletter'

  if (!MAILERSEND_API_KEY || !FROM_EMAIL) {
    throw new Error('MAILERSEND_API_KEY and FROM_EMAIL environment variables are required.')
  }

  const client = createClient({
    ...context.clientOptions,
    apiVersion: '2025-02-19',
  })

  // Fetch all subscriber emails
  const subscribers: { email: string }[] = await client.fetch(
    `*[_type == "wrestlingEmailList"]{ email }`
  )

  if (!subscribers.length) {
    console.log('No subscribers found, skipping email send.')
    return
  }

  // Resolve thumbnail URL if present
  let thumbnailUrl: string | undefined
  if (data.thumbnail?.asset?._ref) {
    const imageDoc = await client.fetch(
      `*[_id == $ref][0]{ "url": url }`,
      { ref: data.thumbnail.asset._ref }
    )
    thumbnailUrl = imageDoc?.url
  }

  const mailerSend = new MailerSend({ apiKey: MAILERSEND_API_KEY })
  const sentFrom = new Sender(FROM_EMAIL, FROM_NAME)

  // Send in batches of 50 using bulk email (each recipient gets a personalized unsubscribe link)
  const BATCH_SIZE = 50
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE)
    const bulkEmails = batch.map((sub) => {
      const unsubscribeUrl = `https://shalonceroyal.com/side-a/unsubscribe?email=${encodeURIComponent(sub.email)}`
      return new EmailParams()
        .setFrom(sentFrom)
        .setTo([new Recipient(sub.email)])
        .setSubject(data.title)
        .setHtml(buildEmailHtml(data, sub.email, thumbnailUrl))
        .setText(`${data.title}\n\nView our latest newsletter.\n\nUnsubscribe: ${unsubscribeUrl}`)
    })

    try {
      await mailerSend.email.sendBulk(bulkEmails)
      console.log(`Sent batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} recipients)`)
    } catch (error) {
      console.error(`Failed to send batch ${Math.floor(i / BATCH_SIZE) + 1}:`, error)
    }
  }

  console.log(`Newsletter "${data.title}" distributed to ${subscribers.length} subscribers.`)
})