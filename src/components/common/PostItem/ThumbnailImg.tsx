import React from 'react';

interface ThumbnailImgProps {
  thumbnailImg: string;
}

const ThumbnailImg = ({thumbnailImg}: ThumbnailImgProps) => {
  if (!thumbnailImg) {
    return (
      <div className="aspect-video flex justify-center items-center bg-gray-500" />
    );
  }
  return <img alt="thumbnail" className="aspect-video" src={thumbnailImg} />;
};

export default ThumbnailImg;
