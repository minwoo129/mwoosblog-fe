import type {NextConfig} from 'next';
import nextMDX from '@next/mdx';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
