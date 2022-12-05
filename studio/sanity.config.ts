import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import './styles.css'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {dashboardTool} from '@sanity/dashboard'
import {vercelWidget} from 'sanity-plugin-dashboard-widget-vercel'
import {GoGear} from 'react-icons/go'

export default defineConfig({
  name: 'default',
  title: 'ACME Corp',

  projectId: 'l1m6fvcx',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => {
        const settingsListItem = S.listItem()
          .title('Settings')
          .icon(GoGear)
          .child(S.editor().id('global-config').schemaType('site-config'))
        const defaultListItems = S.documentTypeListItems().filter(
          (listItem) => listItem.getId() !== 'site-config'
        )

        return S.list()
          .title('Content')
          .items([settingsListItem, S.divider(), ...defaultListItems])
      },
    }),
    unsplashImageAsset(),
    dashboardTool({
      widgets: [vercelWidget()],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
