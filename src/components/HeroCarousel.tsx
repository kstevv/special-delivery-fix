'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Link from 'next/link';
import { desktopImages, mobileImages } from '../data/heroCarouselImages';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current!);
  }, [current, images.length, isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      startXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startXRef.current === null) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startXRef.current - endX;
      if (diff > 50) nextSlide();
      else if (diff < -50) prevSlide();
      startXRef.current = null;
    };

    const node = carouselRef.current;
    if (node) {
      node.addEventListener('touchstart', handleTouchStart);
      node.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (node) {
        node.removeEventListener('touchstart', handleTouchStart);
        node.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full overflow-hidden mb-6" ref={carouselRef}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 h-[400px] sm:h-[500px] md:h-[600px] relative"
          >
            <img
              src={image.src}
              alt={image.alt || 'Slide image'}
              className="w-full h-full object-cover"
            />

            {/* Caption Overlay */}
            <div className="absolute inset-0 flex items-end justify-center px-4 pb-1 sm:pb-12">
              <div className="max-w-7xl mx-auto relative w-full">
                {/* ✅ Mobile-only: blurred background with content */}
                
 {isMobile && (image.ticketUrl || image.websiteUrl || image.title || image.description) && (
  <div className="md:hidden relative w-full max-w-xs mx-auto px-4 z-10 pt-6 pb-6">
    
    {/* Conditional blur only if there's text */}
    {(image.title || image.description) && (
      <div
                      className="absolute bottom-0 left-0 right-0 h-[165px] max-w z-[-1] rounded-lg"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        WebkitBackdropFilter: 'blur(8px)',
                        backdropFilter: 'blur(8px)',
                      }}
                    />
    )}

    <div>
      {image.title && (
        <h2 className="text-white text-4xl font-bold text-center uppercase mb-2">
          {image.title}
        </h2>
      )}
      {image.description && (
        <p className="text-white drop-shadow-md text-sm sm:text-base mb-4 text-center">
          {image.description}
        </p>
      )}

      {(image.ticketUrl || image.websiteUrl) && (
        <div className="flex justify-center gap-4">
          {image.ticketUrl && (
            <Link
              href={image.ticketUrl}
              className="bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-semibold transition whitespace-nowrap"
            >
              Buy Tickets
            </Link>
          )}
          {image.showWebsiteButton && image.websiteUrl && (
            <Link
              href={image.websiteUrl}
              className="bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-semibold transition whitespace-nowrap"
            >
              Visit Website
            </Link>
          )}
        </div>
      )}
    </div>
  </div>
)}



                {/* ✅ Desktop-only: bottom-left buttons */}
                {!isMobile && (image.ticketUrl || (image.showWebsiteButton && image.websiteUrl)) && (
                  <div className="hidden md:flex gap-4 absolute bottom-6 left-6 z-10">
                    {image.ticketUrl && (
                      <Link
                        href={image.ticketUrl}
                        className="bg-[#0071e3] hover:bg-blue-600 text-white px-6 py-3 rounded text-sm font-semibold transition"
                      >
                        Buy Tickets
                      </Link>
                    )}
                    {image.showWebsiteButton && image.websiteUrl && (
                      <Link
                        href={image.websiteUrl}
                        className="bg-[#0071e3] hover:bg-blue-600 text-white px-6 py-3 rounded text-sm font-semibold transition"
                      >
                        Visit Website
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      

      {/* Control Bar */}
      <div className="mt-4 flex items-center justify-center gap-4 text-white">
        <button onClick={prevSlide} className="text-black dark:text-white p-2 rounded">
          <ChevronLeft size={24} />
        </button>
        <span className="text-black dark:text-white text-sm">
          {current + 1} / {images.length}
        </span>
        <button onClick={nextSlide} className="text-black dark:text-white p-2 rounded">
          <ChevronRight size={24} />
        </button>
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="text-black dark:text-white p-2 rounded"
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
        </button>
      </div>
    </div>
  );
}
