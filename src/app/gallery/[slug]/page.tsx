import { type Metadata, type ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import galleries from '../../../data/galleries';
import GalleryLightboxWrapper from './GalleryLightboxWrapper';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return {};
  return {
    title: `${gallery.title} | Gallery | Special Delivery Presents`,
    description: `Photos from ${gallery.title} on ${gallery.date}. View the full gallery.`,
  };
}

export default function Page({ params }: Props) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return notFound();

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
        {gallery.title}
      </h1>
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
