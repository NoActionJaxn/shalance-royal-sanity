import {
  seoType,
  commonSeoFields,
  twitterSeoFields,
  openGraphSeoFields,
} from "./shared/seo";
import wrestlingSiteSettingsPage from "./wrestling/siteSettings";
import wrestlingHomePage from "./wrestling/homePage";
import wrestlingAboutPage from "./wrestling/aboutPage";
import wrestlingGalleryPage from "./wrestling/galleryPage";
import wrestlingMatchesPage, { wrestlingMatchType } from "./wrestling/matchesPage";
import wrestlingEventsPage, { wrestlingEventType } from "./wrestling/eventsPage";
import streamingSchedulePage from "./streaming/schedulePage";
import streamingSiteSettingsPage from "./streaming/siteSettings";
import { ctaType } from "./shared/cta";
import { faIconType } from "./shared/faIcon";

export const schemaTypes = {
  wrestling: [
    ctaType,
    faIconType,
    seoType,
    wrestlingEventType,
    commonSeoFields,
    twitterSeoFields,
    openGraphSeoFields,
    wrestlingMatchType,
    wrestlingHomePage,
    wrestlingAboutPage,
    wrestlingGalleryPage,
    wrestlingMatchesPage,
    wrestlingEventsPage,
    wrestlingSiteSettingsPage
  ],
  streaming: [
    ctaType,
    faIconType,
    seoType,
    commonSeoFields,
    twitterSeoFields,
    openGraphSeoFields,
    streamingSchedulePage,
    streamingSiteSettingsPage
  ],
};
