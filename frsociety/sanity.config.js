import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'frsociety',

  projectId: 'f5soi4ik',
  dataset: 'frsociety-dataset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
