/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/website' : '',
  assetPrefix: isGithubPages ? '/website/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
