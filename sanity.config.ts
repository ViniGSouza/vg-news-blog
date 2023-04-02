import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import { myTheme } from './theme';
import Logo from '@/pages/components/Logo';
import StudioNavBar from '@/pages/components/StudioNavbar';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  basePath: '/studio',
  name: 'VG_Content_Studio',
  title: 'VG News - Content Studio',
  projectId,
  dataset,
  apiVersion,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar
    }
  },
  theme: myTheme
})
