'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import type { ControllerRef } from 'yet-another-react-lightbox';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import BackButton from './BackButton';
import { formatLocalDate } from '../lib/formatDate';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

function NextJsImage({ slide }: any) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Image
        src={slide.src}
        alt={slide.alt || ''}
        fill
        style={{ objectFit: 'contain' }}
        sizes="100vw"
        priority
      />
    </div>
  );
}

export default function GalleryDetail({ gallery }: GalleryDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lightboxRef = useRef<ControllerRef>(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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

  const slides = gallery.images.map((src) => ({
    src,
    width: 1200,
    height: 800,
    alt: `${gallery.title} photo`,
  }));

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto" aria-labelledby="gallery-title">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
            {gallery.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            {formatLocalDate(gallery.date)}
          </p>
        </div>
        <BackButton />
      </div>

      <GalleryLightboxWrapper
        images={gallery.images}
        title={gallery.title}
        onImageClick={(i) => {
          setCurrentIndex(i);
          setLightboxOpen(true);
        }}
      />

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{ view: ({ index }) => setCurrentIndex(index) }}
        plugins={[Fullscreen, Thumbnails, Zoom]}
        controller={{ ref: lightboxRef }}
        render={{
          slide: NextJsImage,
          thumbnail: ({ slide }) => (
            <div className="border border-white/20 rounded-md shadow-sm overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt || ''}
                width={120}
                height={80}
                loading="lazy"
                className="object-cover rounded-md transition-transform duration-200 hover:scale-105"
              />
            </div>
          ),
          controls: () => (
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-4 px-4 py-2 bg-black/70 rounded-md text-white text-sm shadow">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxRef.current?.prev();
                }}
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <span className="min-w-[60px] text-center select-none">
                {currentIndex + 1} / {slides.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxRef.current?.next();
                }}
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </button>
            </div>
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}
