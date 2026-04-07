import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'distributeNewsLetter',
      event: {
        on: ['create', 'update'],
        filter: '_type == "wrestlingNewsletter"',
        projection: '{_id, title, slug, body, thumbnail}',
      },
    }),
  ],
})