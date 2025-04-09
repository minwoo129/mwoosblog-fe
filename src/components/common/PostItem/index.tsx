'use client';
import {Post} from '@/constants/types';
import React from 'react';
import {Card} from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import {ClockCircleOutlined} from '@ant-design/icons';
import ThumbnailImg from './ThumbnailImg';

const {Meta} = Card;

interface PostItemProps {
  post: Post;
}

const PostItem = ({post}: PostItemProps) => {
  const {title, createdAt, thumbnailImg, slug} = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className=" transition ease-in-out duration-300 hover:scale-105">
      <Card
        hoverable
        className="w-[300px]"
        cover={<ThumbnailImg thumbnailImg={thumbnailImg} />}>
        <Meta
          title={title}
          description={
            <div className="flex justify-start items-center">
              <ClockCircleOutlined style={{marginRight: 4}} />
              <p>{dayjs(createdAt).format('YYYY-MM-DD')}</p>
            </div>
          }
        />
      </Card>
    </Link>
  );
};

export default PostItem;
