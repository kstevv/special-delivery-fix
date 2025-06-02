// /src/app/gallery/[slug]/page.tsx
import { notFound } from 'next/navigation';
import galleries from '../../../data/galleries';

interface Params {
  params: {
    slug: string;
  };
}

export default function GalleryDetailPage({ params }: Params) {
  const gallery = galleries.find((g) => g.slug === params.slug);

  if (!gallery) return notFound();

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">{gallery.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{new Date(gallery.date).toLocaleDateString()}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.images.map((src, i) => (
          <img key={i} src={src} alt={`${gallery.title} ${i + 1}`} className="w-full h-80 object-cover rounded" />
        ))}
      </div>
    </div>
  );
}
