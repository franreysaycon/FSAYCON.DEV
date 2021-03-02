/* eslint-disable */
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
const fs = require('fs')

async function getDynamicPaths() {
  const blogFiles = fs.readdirSync(__dirname + '/src/content');
  return blogFiles.map((slug) => `/blog/${slug.replace(/\.md$/, '')}`);
}

getDynamicPaths().then((paths) => {
  const Sitemap = configureSitemap({
    baseUrl: 'https://fsaycon.dev',
    include: paths,
    exclude: ['/blog/[slug]'],
    excludeIndex: true,
    pagesConfig: {
      '/blog/*': {
        priority: '0.5',
        changefreq: 'daily',
      },
    },
    isTrailingSlashRequired: false,
    targetDirectory: __dirname + '/out',
    pagesDirectory: __dirname + '/src/pages',
  });
  Sitemap.generateSitemap();
});
