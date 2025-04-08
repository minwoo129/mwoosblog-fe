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
      <h1 className="mb-0">{title}</h1>
      <div className="flex gap-3">
        <p>{dayjs(createdAt).format('YYYY년 MM월 DD일')}</p>
        <p>({tags.map((tag, i) => `${i ? ', ' : ''}${tag}`)})</p>
      </div>
      <hr className="mt-0" />
      <div className="mx-auto aspect-video md:w-2/3">
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
    </header>
  );
};

export default BlogTitle;
