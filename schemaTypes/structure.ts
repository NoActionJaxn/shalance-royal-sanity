import { type StructureResolver, type StructureBuilder } from 'sanity/structure';
import { SINGLETON_TYPES } from '../constants/singletonTypes';
import { pageIds } from '../constants/pageIds';

const excludeSingletons = (S: StructureBuilder) =>
  S.documentTypeListItems().filter((listItem) => {
    const id = listItem.getId?.();
    return id ? !SINGLETON_TYPES.includes(id) : true;
  });

export const wrestlingStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Wrestling')
    .items([
      S.listItem()
        .id(pageIds.WRESTLING_SITE_SETTINGS_PAGE)
        .schemaType(pageIds.WRESTLING_SITE_SETTINGS_PAGE)
        .title('Site Settings')
        .child(
          S.editor()
            .id(pageIds.WRESTLING_SITE_SETTINGS_PAGE)
            .schemaType(pageIds.WRESTLING_SITE_SETTINGS_PAGE)
            .documentId(pageIds.WRESTLING_SITE_SETTINGS_PAGE),
        ),
      S.listItem()
        .id(pageIds.WRESTLING_HOME_PAGE)
        .schemaType(pageIds.WRESTLING_HOME_PAGE)
        .title('Home Page')
        .child(
          S.editor()
            .id(pageIds.WRESTLING_HOME_PAGE)
            .schemaType(pageIds.WRESTLING_HOME_PAGE)
            .documentId(pageIds.WRESTLING_HOME_PAGE),
        ),
      S.listItem()
        .id(pageIds.WRESTLING_ABOUT_PAGE)
        .schemaType(pageIds.WRESTLING_ABOUT_PAGE)
        .title('About Page')
        .child(
          S.editor()
            .id(pageIds.WRESTLING_ABOUT_PAGE)
            .schemaType(pageIds.WRESTLING_ABOUT_PAGE)
            .documentId(pageIds.WRESTLING_ABOUT_PAGE),
        ),
      S.listItem()
        .id(pageIds.WRESTLING_GALLERY_PAGE)
        .schemaType(pageIds.WRESTLING_GALLERY_PAGE)
        .title('Gallery Page')
        .child(
          S.editor()
            .id(pageIds.WRESTLING_GALLERY_PAGE)
            .schemaType(pageIds.WRESTLING_GALLERY_PAGE)
            .documentId(pageIds.WRESTLING_GALLERY_PAGE),
        ),
      S.listItem()
        .id(pageIds.WRESTLING_MATCHES_PAGE)
        .schemaType(pageIds.WRESTLING_MATCHES_PAGE)
        .title('Matches Page')
        .child(
          S.editor()
            .id(pageIds.WRESTLING_MATCHES_PAGE)
            .schemaType(pageIds.WRESTLING_MATCHES_PAGE)
            .documentId(pageIds.WRESTLING_MATCHES_PAGE),
        ),
      S.listItem()
        .id(pageIds.WRESTLING_EVENTS_PAGE)
        .schemaType(pageIds.WRESTLING_EVENTS_PAGE)
        .title('Events Page')
        .child(
          S.editor()
            .id(pageIds.WRESTLING_EVENTS_PAGE)
            .schemaType(pageIds.WRESTLING_EVENTS_PAGE)
            .documentId(pageIds.WRESTLING_EVENTS_PAGE),
        ),
      ...excludeSingletons(S),
    ]);

export const streamingStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Streaming')
    .items([
      S.listItem()
        .id(pageIds.STREAMING_SITE_SETTINGS_PAGE)
        .schemaType(pageIds.STREAMING_SITE_SETTINGS_PAGE)
        .title('Streaming Site Settings')
        .child(
          S.editor()
            .id(pageIds.STREAMING_SITE_SETTINGS_PAGE)
            .schemaType(pageIds.STREAMING_SITE_SETTINGS_PAGE)
            .documentId(pageIds.STREAMING_SITE_SETTINGS_PAGE),
        ),
      S.listItem()
        .id(pageIds.STREAMING_SCHEDULE_PAGE)
        .schemaType(pageIds.STREAMING_SCHEDULE_PAGE)
        .title('Streaming Schedule Page')
        .child(
          S.editor()
            .id(pageIds.STREAMING_SCHEDULE_PAGE)
            .schemaType(pageIds.STREAMING_SCHEDULE_PAGE)
            .documentId(pageIds.STREAMING_SCHEDULE_PAGE),
        ),
      ...excludeSingletons(S),
    ]);

export const rootStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Root')
    .items([
      S.listItem()
        .id(pageIds.ROOT_SITE_SETTINGS_PAGE)
        .schemaType(pageIds.ROOT_SITE_SETTINGS_PAGE)
        .title('Root Site Settings')
        .child(
          S.editor()
            .id(pageIds.ROOT_SITE_SETTINGS_PAGE)
            .schemaType(pageIds.ROOT_SITE_SETTINGS_PAGE)
            .documentId(pageIds.ROOT_SITE_SETTINGS_PAGE),
        ),
      ...excludeSingletons(S),
    ]);
    