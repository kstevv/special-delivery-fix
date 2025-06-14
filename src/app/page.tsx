import HeroCarousel from '../components/HeroCarousel';
import EventCard from "../components/EventCard";
import events from "../data/events";
import festivals from "../data/festivals";
import galleries from "../data/galleries";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      {[
  { title: "Events", link: "/events", data: events, buttonLabel: "Buy Tickets", variant: "default" },
  { title: "Our Festivals", link: null, data: festivals, buttonLabel: "More Info", variant: "festival" },
  { title: "Gallery", link: "/gallery", data: galleries, variant: "gallery" },
].map((section, index) => (
  <section key={index} className="mt-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">{section.title}</h2>
        {section.link && (
          <a href={section.link} className="text-black dark:text-white font-medium text-[1.2rem]">
            View All
          </a>
        )}
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-6 pb-4 w-max">
          {section.data.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] sm:w-[360px]">
              <EventCard event={item} variant={section.variant as "default" | "festival" | "gallery"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
))}

    </>
  );
}
