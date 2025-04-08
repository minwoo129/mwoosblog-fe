import type {MDXComponents} from 'mdx/types';
import Link from 'next/link';
import BlogTitle from '@/components/screens/post/BlogTitle';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    BlogTitle,
    ...components,
  };
}
