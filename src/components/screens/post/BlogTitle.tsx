import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

interface BlogTitleProps {
  title: string;
  createdAt: string;
  thumbnailImg: string;
  tags: string[];
}

const BlogTitle = async ({
  title,
  createdAt,
  tags,
  thumbnailImg,
}: BlogTitleProps) => {
  const {src, width, height, placeholder} =
    await getPlaceholderImage(thumbnailImg);
  return (
    <header>
      <h1 className="mb-0 text-white">{title}</h1>
      <div className="flex gap-3 text-white">
        <p>{dayjs(createdAt).format('YYYY년 MM월 DD일')}</p>
        <p>({tags.map((tag, i) => `${i ? ', ' : ''}${tag}`)})</p>
      </div>
      <hr className="mt-[8px]" />
      <div className="mx-auto aspect-video">
        <Image
          src={src}
          alt={`${title} 포스터 이미지`}
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={placeholder}
          className="size-full"
        />
      </div>
      <div className="h-[40px]" />
    </header>
  );
};

export default BlogTitle;
