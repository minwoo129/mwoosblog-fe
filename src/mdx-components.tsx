import type {MDXComponents} from 'mdx/types';
import Link from 'next/link';
import BlogTitle from '@/components/screens/post/BlogTitle';
//import {ThemeType} from './constants/Themes';
//import {useMemo} from 'react';
import './app/css/prose.css';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({children, href}) => (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    Link,
    BlogTitle,
    ...components,
  };
}
