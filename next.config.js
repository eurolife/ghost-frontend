const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages, {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: '/ghost-frontend/_next/static/images/',
    }
  ],
  {
  assetPrefix: '/ghost-frontend/',
  basePath: '/ghost-frontend',
  pageExtensions: ["tsx", 'js'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
}
]);
// module.exports = {
//   assetPrefix: '/ghost-frontend/',
//   basePath: '/ghost-frontend',
//   pageExtensions: ["tsx", 'js'],
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.module.rules.push(
//       ...[
//         {
//           test: /\.yml$/,
//           type: "json",
//           use: "yaml-loader",
//         },
//         {
//           test: /\.svg$/,
//           use: "@svgr/webpack",
//         },
//       ]
//     );
//     return config;
//   },
// }

