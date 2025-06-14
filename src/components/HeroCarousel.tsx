'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Link from 'next/link';

const desktopImages = [
  {
    src: '/images/carousel/wicked-oaks-25.jpg',
    title: '',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/carousel/galantis.jpg',
    title: '',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test.jpg',
    title: 'Some Bitch',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/carousel/test2.jpg',
    title: 'Tito',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test3.jpg',
    title: '',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
];

const mobileImages = [
  {
    src: '/images/wicked-oaks.jpg',
    title: '',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/galantis-atx.jpg',
    title: '',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test-mobile.jpg',
    title: 'some bitch',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
  {
    src: '/images/carousel/test2.jpg',
    title: 'tito',
    ticketUrl: 'https://wl.seetickets.us/event/Galantis-at-The-Concourse-Project/645108?afflky=TheConcourseProject',
    showWebsiteButton: false,
  },
  {
    src: '/images/carousel/test3-mobile.jpg',
    title: '',
    ticketUrl: 'https://wl.seetickets.us/event/Wicked-Oaks-2025/649630?afflky=WickedOaks',
    websiteUrl: 'https://wickedoaksfest.com/',
    showWebsiteButton: true,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = isMobile ? mobileImages : desktopImages;

  // Resize listener for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto slide
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

  // Swipe handlers
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      startXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startXRef.current === null) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startXRef.current - endX;

      if (diff > 50) nextSlide(); // swipe left
      else if (diff < -50) prevSlide(); // swipe right

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

  // Keyboard navigation
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
          <div key={i} className="w-full flex-shrink-0 h-[400px] sm:h-[500px] md:h-[600px] relative">
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="w-full max-w-7xl mx-auto px-6 pb-6 sm:pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between text-center sm:text-left">
                <div>
                  <h2 className="text-white text-4xl font-bold mb-2">{image.title}</h2>
                  <div className="flex flex-row gap-4 justify-center sm:justify-start">
                    <Link
                      href={image.ticketUrl}
                      className="bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition"
                    >
                      Buy Tickets
                    </Link>
                    {image.showWebsiteButton && (
                      <Link
                        href={image.websiteUrl!}
                        className="bg-[#0071e3] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold transition"
                      >
                        Visit Website
                      </Link>
                    )}
                  </div>
                </div>
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
