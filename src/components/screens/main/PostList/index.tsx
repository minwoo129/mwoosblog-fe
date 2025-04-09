import PostItem from '@/components/common/PostItem';
import {Post} from '@/constants/types';
import React from 'react';

interface PostListProps {
  posts: Post[];
}

const PostList = ({posts}: PostListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-[16px] md:grid-cols-2 sm:grid-cols-1 ">
      {posts.map((post, idx) => {
        return <PostItem post={post} key={idx} />;
      })}
    </div>
  );
};

export default PostList;
