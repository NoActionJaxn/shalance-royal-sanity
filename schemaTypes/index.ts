import {
  seoType,
  commonSeoFields,
  twitterSeoFields,
  openGraphSeoFields,
} from "./shared/seo";
import wrestlingSiteSettingsPage from "./wrestling/siteSettings";
import wrestlingHomePage, { wrestlingAccoladeType } from "./wrestling/homePage";
import wrestlingAboutPage from "./wrestling/aboutPage";
import wrestlingGalleryPage from "./wrestling/galleryPage";
import wrestlingMatchesPage, { wrestlingMatchType } from "./wrestling/matchesPage";
import wrestlingEventsPage, { wrestlingEventType } from "./wrestling/eventsPage";
import streamingSchedulePage from "./streaming/schedulePage";
import streamingSiteSettingsPage from "./streaming/siteSettings";
import { ctaType } from "./shared/cta";
import { faIconType } from "./shared/faIcon";
import sideType from "./shared/side";
import rootSiteSettingsPage from "./shared/siteSettings";

export const schemaTypes = {
  root: [
    ctaType,
    faIconType,
    seoType,
    commonSeoFields,
    twitterSeoFields,
    openGraphSeoFields,
    sideType,
    rootSiteSettingsPage
  ],
  wrestling: [
    ctaType,
    faIconType,
    seoType,
    wrestlingEventType,
    wrestlingAccoladeType,
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
