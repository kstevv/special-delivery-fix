'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[90vh] text-white overflow-hidden">
      {/* Local video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Unforgettable Music Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
          Join us for high-energy concerts and festivals across the country. Discover events, artists, and more.
        </p>
        <Link
          href="/events"
          className="inline-block bg-[#3ea6ff] text-white text-white text-sm font-bold px-4 py-2 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-0"
        >
          Buy Tickets
        </Link>
      </div>
    </section>
  );
}
