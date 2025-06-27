'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatLocalDate } from '../lib/formatDate';

interface Gallery {
  title: string;
  date: string;
  slug: string;
  image: string;
}

export default function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <Link
      href={`/gallery/${gallery.slug}`}
      className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image
          src={gallery.image}
          alt={gallery.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          priority
        />
      </div>
      <div className="p-4 bg-white dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-black dark:text-white">{gallery.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
            {formatLocalDate(gallery.date)}
        </p>
      </div>
    </Link>
  );
}
