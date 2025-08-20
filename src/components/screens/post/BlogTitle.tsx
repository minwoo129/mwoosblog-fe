import dayjs from 'dayjs';
import React from 'react';
import ThumbnailImg from './ThumbnailImg';

interface BlogTitleProps extends TagsProps {
  title: string;
  createdAt: string;
  thumbnailImg: string;
  tags: string[];
}

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  if (tags.length === 0) return null;

  return <p>({tags.map((tag, i) => `${i ? ', ' : ''}${tag}`)})</p>;
};

const BlogTitle = async ({
  title,
  createdAt,
  tags,
  thumbnailImg,
}: BlogTitleProps) => {
  return (
    <header>
      <h1 className="mb-0 text-white">{title}</h1>
      <div className="flex gap-3 text-white">
        <p>{dayjs(createdAt).format('YYYY년 MM월 DD일')}</p>
        <Tags tags={tags} />
      </div>
      <hr className="mt-[8px]" />
      <ThumbnailImg title={title} thumbnailImg={thumbnailImg} />
      <div className="h-[40px]" />
    </header>
  );
};

export default BlogTitle;
