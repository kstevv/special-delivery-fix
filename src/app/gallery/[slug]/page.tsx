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
  params: { slug: string }; // ✅ this avoids the PageProps error
};

export default function GallerySlugPage({ params }: Props) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return notFound();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
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

        {/* Back button */}
        <div className="self-start lg:self-center">
          <BackButton />
        </div>
      </div>

      <GalleryLightboxWrapper images={gallery.images} title={gallery.title} />
    </main>
  );
}
