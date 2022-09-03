// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FY 2023 FAQs',
  tagline: 'DA FY 2022 FREQUENTLY ASKED QUESTIONS FOR 2023 BUDGET PLENARY HEARINGS',
  url: 'https://da-pips2022.web.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-192x192.png',
  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dapmsipd', // Usually your GitHub org/user name.
  projectName: 'dafaqs2022', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mlab817/dafaqs2022/edit/main',
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mlab817/dafaqs2022/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-141789564-1',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FAQs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'toc',
            position: 'left',
            label: 'Table of Contents',
          },
          // {to: '/blog', label: 'FAQs', position: 'left'},
          {
            href: 'https://github.com/mlab817/dafaqs2022',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          src: '/img/logo.png',
          alt: 'logo',
          height: 64,
          target: '_self'
        },
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mark Lester Bolotaolo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // whether to index docs pages
          indexDocs: true,

          // Whether to also index the titles of the parent categories in the sidebar of a doc page.
          // 0 disables this feature.
          // 1 indexes the direct parent category in the sidebar of a doc page
          // 2 indexes up to two nested parent categories of a doc page
          // 3...
          //
          // Do _not_ use Infinity, the value must be a JSON-serializable integer.
          indexDocSidebarParentCategories: 2,

          // whether to index blog pages
          indexBlog: false,

          // whether to index static pages
          // /404.html is never indexed
          indexPages: false,

          // language of your documentation, see next section
          language: "en",

          // setting this to "none" will prevent the default CSS to be included. The default CSS
          // comes from autocomplete-theme-classic, which you can read more about here:
          // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
          // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
          // overwrites with `!important`, because they might otherwise not be applied as expected. See the
          // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
          style: undefined,

          // The maximum number of search results shown to the user. This does _not_ affect performance of
          // searches, but simply does not display additional search results that have been found.
          maxSearchResults: 10,

          // lunr.js-specific settings
          lunr: {
            // When indexing your documents, their content is split into "tokens".
            // Text entered into the search box is also tokenized.
            // This setting configures the separator used to determine where to split the text into tokens.
            // By default, it splits the text at whitespace and dashes.
            //
            // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
            tokenizerSeparator: /[\s\-]+/,
            // https://lunrjs.com/guides/customising.html#similarity-tuning
            //
            // This parameter controls the importance given to the length of a document and its fields. This
            // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
            // reduces the effect of different length documents on a term’s importance to that document.
            b: 0.75,
            // This controls how quickly the boost given by a common word reaches saturation. Increasing it
            // will slow down the rate of saturation and lower values result in quicker saturation. The
            // default value is 1.2. If the collection of documents being indexed have high occurrences
            // of words that are not covered by a stop word filter, these words can quickly dominate any
            // similarity calculation. In these cases, this value can be reduced to get more balanced results.
            k1: 1.2,
            // By default, we rank pages where the search term appears in the title higher than pages where
            // the search term appears in just the text. This is done by "boosting" title matches with a
            // higher value than content matches. The concrete boosting behavior can be controlled by changing
            // the following settings.
            titleBoost: 5,
            contentBoost: 1,
            tagsBoost: 3,
            parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
          }
        }
      ],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/logo.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
          ],
        },
      ],

    ],
};

module.exports = config;
