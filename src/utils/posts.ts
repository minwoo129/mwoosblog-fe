import {Post} from '@/constants/types';
import {readdir} from 'fs/promises';
import path from 'path';

export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(), 'src', 'app', 'blog', '(posts)');

  const slugs = (await readdir(postPath, {withFileTypes: true})).filter(
    dirent => dirent.isDirectory()
  );

  const posts = await Promise.all(
    slugs.map(async ({name}) => {
      const {metadata} = await import(`../app/blog/(posts)/${name}/page.mdx`);
      return {slug: name, ...metadata} as Post;
    })
  );

  posts.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));

  if (process.env.NODE_ENV !== 'production') {
    return posts;
  }
  return posts.filter(post => post.visible);
}
