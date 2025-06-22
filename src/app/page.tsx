import HeroCarousel from '../components/HeroCarousel';
import EventCard from '../components/EventCard';
import events from '../data/events';
import festivals from '../data/festivals';
import galleries from '../data/galleries';
import { EventVariant } from '../types';

export const metadata = {
  title: 'Home | Special Delivery Presents',
  description: 'Discover upcoming events, exclusive festivals, and past moments in our photo gallery.',
};

interface Section {
  title: string;
  id: string;
  link: string | null;
  data: any[];
  buttonLabel?: string;
  variant: EventVariant;
}

export default function Home() {
  const sections: Section[] = [
    {
      title: 'Events',
      id: 'events',
      link: '/events',
      data: events,
      buttonLabel: 'Buy Tickets',
      variant: 'event',
    },
    {
      title: 'Our Festivals',
      id: 'festivals',
      link: null,
      data: festivals,
      buttonLabel: 'More Info',
      variant: 'festival',
    },
    {
      title: 'Gallery',
      id: 'gallery',
      link: '/gallery',
      data: galleries,
      variant: 'gallery',
    },
  ];

  return (
    <main>
      <HeroCarousel />
      {sections.map((section, index) => (
        <section
          id={section.id}
          key={index}
          className="mb-8"
          aria-labelledby={`${section.id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-4">
              <h2
                id={`${section.id}-heading`}
                className="text-3xl md:text-4xl font-bold text-black dark:text-white"
              >
                {section.title}
              </h2>
              {section.link && (
                <a
                  href={section.link}
                  className="text-black dark:text-white font-medium text-[1.2rem]"
                  aria-label={`View all ${section.title.toLowerCase()}`}
                >
                  View All
                </a>
              )}
            </div>

            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-4 w-max">
                {section.data.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-[300px] sm:w-[360px]">
                    <EventCard event={item} variant={section.variant} buttonLabel={section.buttonLabel} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
