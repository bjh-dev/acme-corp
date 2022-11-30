import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import './styles.css'

export default defineConfig({
  name: 'default',
  title: 'renegade',

  projectId: 'l1m6fvcx',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
