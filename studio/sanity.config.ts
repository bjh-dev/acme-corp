import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import './styles.css'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { dashboardTool } from "@sanity/dashboard";
import { vercelWidget } from "sanity-plugin-dashboard-widget-vercel";

export default defineConfig({
  name: 'default',
  title: 'renegade',

  projectId: 'l1m6fvcx',
  dataset: 'production',

  plugins: [
    deskTool(),
    unsplashImageAsset(),
    dashboardTool({
      widgets: [vercelWidget()],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
