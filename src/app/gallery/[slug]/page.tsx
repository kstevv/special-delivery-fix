import { notFound } from 'next/navigation';
import galleries from '../../../data/galleries';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';
import type { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return {};

  return {
    title: `${gallery.title} | Gallery | Special Delivery Presents`,
    description: `Photos from ${gallery.title} on ${gallery.date}. View the full gallery.`,
  };
}

export default function GalleryPage({ params }: Props) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return notFound();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex items-start justify-between flex-wrap gap-y-2 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-black dark:text-white">
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
          onClick={() => history.back()}
          className="text-sm px-4 py-2 text-white bg-[#0071e3] rounded-md font-bold transition hover:bg-blue-600"
        >
          ← Back
        </button>
      </div>

      <GalleryLightboxWrapper
        images={gallery.images}
        title={gallery.title}
      />
    </main>
  );
}
