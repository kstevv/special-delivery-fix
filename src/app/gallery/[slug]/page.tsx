import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import galleries from '../../../data/galleries';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';
import BackButton from '../../../components/BackButton';

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return {};

  return {
    title: `${gallery.title} | Gallery | Special Delivery Presents`,
    description: `Photos from ${gallery.title} on ${gallery.date}. View the full gallery.`,
  };
}

export default function GallerySlugPage({ params }: { params: Params }) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return notFound();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white mb-1">
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

      <GalleryLightboxWrapper images={gallery.images} title={gallery.title} />
    </main>
  );
}
