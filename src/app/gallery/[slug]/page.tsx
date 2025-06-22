// File: src/app/gallery/[slug]/page.tsx

import { notFound } from 'next/navigation';
import galleries from '../../../data/galleries';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';
import BackButton from './BackButton';
import type { Metadata } from 'next';

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return {};

  return {
    title: `${gallery.title} | Gallery | Special Delivery Presents`,
    description: `Photos from ${gallery.title} on ${gallery.date}. View the full gallery.`,
  };
}

// Page component
type Props = {
  params: { slug: string };
};

export default function GallerySlugPage({ params }: Props) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return notFound();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header row with title, date, and back button */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
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

        <BackButton />
      </div>

      {/* Gallery */}
      <GalleryLightboxWrapper images={gallery.images} title={gallery.title} />
    </main>
  );
}
