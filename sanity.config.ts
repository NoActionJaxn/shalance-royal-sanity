import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'shalance-royal',

  projectId: 'eimk2ovz',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
