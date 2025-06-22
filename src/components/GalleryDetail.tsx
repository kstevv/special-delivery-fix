'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface GalleryDetailProps {
  gallery: {
    title: string;
    date: string;
    slug: string;
    images: string[];
  };
}

export default function GalleryDetail({ gallery }: GalleryDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: gallery.title,
    datePublished: gallery.date,
    url: `https://specialdeliverypresents.com/gallery/${gallery.slug}`,
    image: gallery.images.map((src) =>
      src.startsWith('http') ? src : `https://specialdeliverypresents.com${src}`
    ),
  };

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto" aria-labelledby="gallery-title">
      <h1 id="gallery-title" className="text-3xl font-bold text-black dark:text-white mb-4">
        {gallery.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {new Date(gallery.date).toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {gallery.images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setLightboxOpen(true);
            }}
            className="relative w-full sm:h-[180px] h-24 rounded overflow-hidden cursor-pointer"
            aria-label={`Open photo ${idx + 1} in lightbox`}
          >
            <Image
              src={src.startsWith('/') ? src : `/${src}`}
              alt={`${gallery.title} photo ${idx + 1}`}
              fill
              className="object-cover hover:opacity-90 transition"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority={idx < 3}
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={gallery.images.map((src) => ({
            src: src.startsWith('http') ? src : `/${src}`,
          }))}
          plugins={[Thumbnails]}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}
