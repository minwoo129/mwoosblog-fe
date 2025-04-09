import PostItem from '@/components/common/PostItem';
import {Post} from '@/constants/types';
import React from 'react';

interface PostListProps {
  posts: Post[];
}

const PostList = ({posts}: PostListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 border-2 border-green-500 py-[16px] sm:grid-cols-1 ">
      {posts.map((post, idx) => {
        return <PostItem post={post} key={idx} />;
      })}
    </div>
  );
};

export default PostList;
