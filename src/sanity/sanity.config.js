import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'indigo-moose',

  projectId: 'w2t1mzvp',
  dataset: 'gymkhana-updates',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
