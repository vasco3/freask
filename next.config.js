const images = require('remark-images');
const emoji = require('remark-emoji');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, emoji],
          },
        },
      ],
    });

    return config;
  },
});
