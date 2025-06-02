import EventCard from '../../components/EventCard';
import events from '../../data/galleries';

export default function GalleryPage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} event={event} variant="gallery" />
        ))}
      </div>
    </div>
  );
}
