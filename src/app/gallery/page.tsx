import Image from 'next/image';
import Link from 'next/link';
import galleries from '../../data/galleries';

export const metadata = {
  title: 'Gallery | Special Delivery Presents',
  description: 'Browse photo galleries from past events and festivals hosted by Special Delivery Presents.',
};

export default function GalleryPage() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto" aria-labelledby="gallery-heading">
      <h1 id="gallery-heading" className="text-4xl font-bold text-black dark:text-white mb-8">
        Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((gallery, index) => (
          <Link
            href={`/gallery/${gallery.slug}`}
            key={index}
            className="block group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-96">
              <Image
                src={gallery.image.startsWith('/') ? gallery.image : `/${gallery.image}`}
                alt={gallery.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:opacity-90 transition-opacity"
                priority={index < 3}
              />
            </div>
            <div className="p-4 bg-white dark:bg-zinc-900">
              <h2 className="text-lg font-semibold text-black dark:text-white">{gallery.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date(gallery.date).toLocaleDateString(undefined, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
