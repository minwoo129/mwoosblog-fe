import {getPosts} from '@/utils/posts';
import {useCallback} from 'react';

const usePosts = () => {
  const fetchPosts = useCallback(async () => {
    try {
      const result = await getPosts();
      console.log('Fetched posts:', result);
      return result;
    } catch (e) {
      console.log('Error fetching posts:', e);
      return [];
    }
  }, []);

  return {
    fetchPosts,
  };
};

export default usePosts;
