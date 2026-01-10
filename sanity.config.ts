import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import type { NewDocumentOptionsResolver, TemplateItem, DocumentActionComponent } from 'sanity';
import { schemaTypes } from './schemaTypes'
import { SINGLETON_TYPES } from './constants/singletonTypes';
import { wrestlingStructure, streamingStructure, rootStructure } from './schemaTypes/structure'
import { colorInput } from '@sanity/color-input';


const newDocumentOptions: NewDocumentOptionsResolver = (prev: TemplateItem[], { creationContext }) => {
  // Hide singleton templates everywhere (global and within type lists)
  const filtered = prev.filter((t) => !SINGLETON_TYPES.includes(t.templateId))

  // Additionally, if the user is inside a singleton type list, remove all create options
  if (
    creationContext.type === 'document' &&
    'schemaType' in creationContext &&
    creationContext.schemaType &&
    SINGLETON_TYPES.includes(creationContext.schemaType)
  ) {
    return []
  }

  return filtered;
}

const actions = (prev: DocumentActionComponent[], { schemaType }: { schemaType: string }) => {
  if (SINGLETON_TYPES.includes(schemaType)) {
    // Remove destructive/duplication actions for singletons
    return prev.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
  }
  return prev;
}

const sharedPlugins = [
  visionTool(),
  colorInput()
];

export default defineConfig([
  {
    name: 'Streaming',
    title: 'shalonce-royal-streaming',
    projectId: 'eimk2ovz',
    dataset: 'production',
    plugins: [structureTool({ structure: streamingStructure }), ...sharedPlugins],
    schema: {
      types: schemaTypes.streaming,
    },
    document: {
      newDocumentOptions,
      actions,
    },
    basePath: '/streaming',
  },
  {
    name: 'Wrestling',
    title: 'shalonce-royal-wrestling',
    projectId: 'eimk2ovz',
    dataset: 'production',
    plugins: [structureTool({ structure: wrestlingStructure }), ...sharedPlugins],
    schema: {
      types: schemaTypes.wrestling,
    },
    document: {
      newDocumentOptions,
      actions,
    },
    basePath: '/wrestling',
  },
  {
    name: 'Root',
    title: 'shalonce-royal-sides',
    projectId: 'eimk2ovz',
    dataset: 'production',
    plugins: [structureTool({ structure: rootStructure }), ...sharedPlugins],
    schema: {
      types: schemaTypes.root,
    },
    document: {
      newDocumentOptions,
      actions,
    },
    basePath: '/root',
  }
]);
