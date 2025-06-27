import galleries from '../../data/galleries';
import GalleryCard from '../../components/GalleryCard';

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
          <GalleryCard key={index} gallery={gallery} />
        ))}
      </div>
    </main>
  );
}
