import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import galleries from '../../../data/galleries';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';
import BackButton from './BackButton';

export async function generateMetadata({ params }): Promise<Metadata> {
  const gallery = galleries.find(g => g.slug === params.slug);
  if (!gallery) return {};

  return {
    title: `${gallery.title} | Gallery | Special Delivery Presents`,
    description: `Photos from ${gallery.title} on ${gallery.date}. View the full gallery.`,
  };
}

export default function GallerySlugPage({ params }) {
  const gallery = galleries.find(g => g.slug === params.slug);
  if (!gallery) return notFound();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          {gallery.title}
        </h1>
        <BackButton />
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-10">
        {new Date(gallery.date).toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <GalleryLightboxWrapper images={gallery.images} title={gallery.title} />
    </main>
  );
}
