'use client';
import {Post} from '@/constants/types';
import React from 'react';
import {Card} from 'antd';
import dayjs from 'dayjs';

const {Meta} = Card;

interface PostItemProps {
  post: Post;
}

const PostItem = ({post}: PostItemProps) => {
  const {title, createdAt, thumbnailImg} = post;

  return (
    <Card
      hoverable
      className="w-[300px] transition ease-in-out duration-300 hover:scale-105"
      cover={<img alt="example" src={thumbnailImg} />}>
      <Meta title={title} description={dayjs(createdAt).format('YYYY-MM-DD')} />
    </Card>
  );
};

export default PostItem;
