// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const rootDir = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));
const docusaurusVersion = (packageJson.dependencies?.['@docusaurus/core'] ?? 'unknown').replace(/^[^\d]*/, '');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Storage and Data Protection',

  // Set the production url of your site here
  url: 'https://dataprotection.pages.commbank.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  scripts: [],
  onBrokenAnchors: 'throw',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  favicon: 'img/favicon.ico',
  organizationName: 'CIO-Technology',
  projectName: 'dataprotection-docs',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/CBA-General/dataprotection-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Storage and Data Protection',
        logo: {
          alt: 'My Site Logo',
          src: 'img/CBA.AX.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'beginner_guide/Access',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'dropdown',
            label: 'Commvault',
            position: 'left',
            items: [
              { type: 'doc', label: 'Commvault Public Cloud', docId: 'commvault/commvault-public-cloud/Commvault_FAQ' },
              { type: 'doc', label: 'Commvault on prem', docId: 'commvault/commvault-on-prem/on-prem-inventory-access' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Operations',
            position: 'left',
            items: [
              { type: 'doc', label: 'Monitoring Alerts', docId: 'operations/monitoring-alerts/observe_dashboard' },
              { type: 'doc', label: 'Operations Management', docId: 'operations/management/commvault_SOP' },
              { type: 'doc', label: 'Ansible', docId: 'operations/Ansible/ansible_access' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Fire',
            position: 'left',
            items: [
              { type: 'doc', label: 'Fire On Prem', docId: 'fire/fire-on-prem/intro' },
              { type: 'doc', label: 'Fire AWS', docId: 'fire/fire-aws/intro' },
            ],
          },
          {
            type: 'doc',
            docId: 'databunker/intro',
            label: 'Data Bunker',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'Bankwest/sop',
            label: 'Bankwest',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'Dpss_Central_Backup/DPSS Public Cloud Server Inventory',
            label: 'Backup',
            position: 'left',
          },
          {
            href: 'https://github.com/CBA-General/dataprotection-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Contact Us',
                href: 'mailto:es_storagedataprotection@cba.com.au',
              },
              {
                label: 'On Call',
                href: 'tel:+61295953269',
              },
              {
                label: 'Raise a DPRS Ticket',
                href: 'https://commbank.sharepoint.com/:u:/r/sites/gts/SitePages/Storage-and-Data-Protection-Front-Door.aspx',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Commvault Learning',
                href: 'https://readiverse.commvault.com/learn/signin',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CBA-General/dataprotection-docs',
              },
            ],
          },
        ],
        copyright: `Maintained by the Data Protection and Storage Practice | Copyright © ${new Date().getFullYear()} | Built with Docusaurus ${docusaurusVersion}.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/"
      },
    ]
  ],
};

export default config;
