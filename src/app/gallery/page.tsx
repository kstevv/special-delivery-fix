'use client';
import EventCard from "../../components/EventCard";
import galleries from '../../data/galleries';

export default function GalleryPage() {
  return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example images — replace with real ones later */}
          {[
            '/images/event1.jpg',
            '/images/event2.jpg',
            '/images/event3.jpg',
            '/images/event4.jpg',
            '/images/event5.jpg',
            '/images/event6.jpg',
          ].map((src, index) => (
            <div key={index} className="w-full h-80 relative rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
  );
}
