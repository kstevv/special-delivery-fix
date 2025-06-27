'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface Props {
  images: string[];
  title: string;
}

export default function GalleryLightbox({ images, title }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({ src: img }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setOpen(true);
              setIndex(i);
            }}
            className="overflow-hidden rounded"
          >
            <Image
              src={img}
              alt={`${title} photo ${i + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-auto transition"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails]}
      />
    </>
  );
}
