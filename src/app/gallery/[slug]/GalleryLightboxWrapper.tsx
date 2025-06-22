'use client';

import dynamic from 'next/dynamic';
import type { FC } from 'react';

const GalleryLightbox = dynamic(() => import('./GalleryLightbox'), {
  ssr: false,
});

interface Props {
  images: string[];
  title: string;
}

const GalleryLightboxWrapper: FC<Props> = ({ images, title }) => {
  return <GalleryLightbox images={images} title={title} />;
};

export default GalleryLightboxWrapper;
