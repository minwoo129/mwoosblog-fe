import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import Image from 'next/image';
import React from 'react';

interface ThumbnailImgProps {
  title: string;
  thumbnailImg: string;
}

const ThumbnailImg = async ({title, thumbnailImg}: ThumbnailImgProps) => {
  if (!thumbnailImg) {
    return null;
  }
  const {src, width, height, placeholder} =
    await getPlaceholderImage(thumbnailImg);

  return (
    <div className="mx-auto">
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
  );
};

export default ThumbnailImg;
