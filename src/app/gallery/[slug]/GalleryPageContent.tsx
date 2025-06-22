'use client';

import { useRouter } from 'next/navigation';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';

interface Props {
  gallery: {
    title: string;
    date: string;
    images: string[];
  };
}

export default function GalleryPageContent({ gallery }: Props) {
  const router = useRouter();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
            {gallery.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            {new Date(gallery.date).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <button
          onClick={() => router.back()}
          className="lg:hidden text-sm px-4 py-2 text-white bg-[#0071e3] rounded-md font-bold transition hover:bg-blue-600"
        >
          ← Back
        </button>
      </div>

      <GalleryLightboxWrapper images={gallery.images} title={gallery.title} />
    </main>
  );
}
