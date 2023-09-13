const withPWA = require("next-pwa");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  images: {
    domains: ["assets.pokemon.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  sassOptions: {
    prependData: "@import \"@styles/resources.scss\";\n\n"
  },
});

module.exports = nextConfig;
