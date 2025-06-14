'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const desktopImages = [
  {
    src: '/images/carousel/wicked-oaks-25.jpg',
    title: 'Wicked Oaks',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/carousel/galantis.jpg',
    title: 'Galantis Live',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test.jpg',
    title: 'Wicked Oaks',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/carousel/test2.jpg',
    title: 'Galantis Live',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test3.jpg',
    title: 'Wicked Oaks',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
];

const mobileImages = [
  {
    src: '/images/wicked-oaks.jpg',
    title: 'Wicked Oaks',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/galantis-atx.jpg',
    title: 'Galantis Live',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test-mobile.jpg',
    title: 'Wicked Oaks',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/carousel/test2.jpg',
    title: 'Galantis Live',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test3-mobile.jpg',
    title: 'Wicked Oaks',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const images = isMobile ? mobileImages : desktopImages;
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mb-10"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    >
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
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />

            {/* Animated overlay content */}
            <div className="absolute bottom-4 left-0 right-0 z-20">
              <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div className="animate-slide-up text-center sm:text-left w-full sm:w-auto flex flex-col items-center sm:items-start">
                  {/*  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h2>  */}
                  <div className="flex flex-row gap-4 items-center sm:items-start sm:justify-start">
                    <Link
                      href={image.ticketUrl}
                      className="inline-block bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition"
                    >
                      Buy Tickets
                    </Link>
                    {image.showWebsiteButton && (
                      <Link
                        href={image.websiteUrl!}
                        className="inline-block bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition"
                      >
                        Visit Website
                      </Link>
                    )}
                  </div>
                </div>

                {/* Line indicators (desktop only) */}
                {!isMobile && (
                  <div className="flex gap-2 mb-2">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-1 w-8 cursor-pointer ${
                          index === current ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows (desktop only) */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="z-30 absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="z-30 absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded hover:bg-black"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
