'use client';

import Masonry from 'react-masonry-css';
import Image from 'next/image';

interface Props {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

export default function GalleryLightboxWrapper({ images, title, onImageClick }: Props) {
  const breakpointColumnsObj = {
    default: 3,
    1280: 3,
    768: 2,
    0: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-column space-y-4"
    >
      {images.map((src, i) => (
        <div
          key={i}
          onClick={() => onImageClick(i)}
          className="mb-4 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay={(i % 6) * 100}
        >
          <Image
            src={src}
            alt={`${title} photo ${i + 1}`}
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>
      ))}
    </Masonry>
  );
}
