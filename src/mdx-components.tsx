import type {MDXComponents} from 'mdx/types';
import Link from 'next/link';
import BlogTitle from '@/components/screens/post/BlogTitle';
//import {ThemeType} from './constants/Themes';
//import {useMemo} from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => <h1 style={{color: 'white'}}>{children}</h1>,
    Link,
    BlogTitle,
    ...components,
  };
}
