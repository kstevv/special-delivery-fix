'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import galleries from '../../../data/galleries';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface PageProps {
  params: { slug: string };
}

export default function GalleryDetailPage({ params }: PageProps) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery) return notFound();

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">{gallery.title}</h1>
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
          <img
            key={idx}
            src={src}
            alt={`${gallery.title} photo ${idx + 1}`}
            className="w-full h-80 object-cover rounded cursor-pointer"
            onClick={() => {
              setCurrentIndex(idx);
              setLightboxOpen(true);
            }}
          />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={gallery.images.map((src) => ({ src }))}
          plugins={[Thumbnails]}
        />
      )}
    </div>
  );
}
