import {getPosts} from '@/utils/posts';
import {useCallback} from 'react';

const usePosts = () => {
  const fetchPosts = useCallback(async () => {
    try {
      const result = await getPosts();
      return result;
      // eslint-disable-next-line no-unused-vars
    } catch (_) {
      return [];
    }
  }, []);

  return {
    fetchPosts,
  };
};

export default usePosts;
