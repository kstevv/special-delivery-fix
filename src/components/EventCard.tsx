import Link from 'next/link';

interface EventCardProps {
  event: {
    title: string;
    date: string;
    location: string;
    image: string;
    description: string;
    ticketUrl: string;
  };
  buttonLabel?: string;
  variant?: 'default' | 'gallery' | 'festival';
}

export default function EventCard({
  event,
  buttonLabel = 'Buy Tickets',
  variant = 'default',
}: EventCardProps) {
  const formattedDate = new Date(event.date + 'T00:00:00').toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const cardContent = (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img src={event.image} alt={event.title} className="w-full h-80 object-cover" />
      
      {variant === 'gallery' && (
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
        </div>
      )}

      {variant !== 'gallery' && (
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>

          {variant === 'default' && (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{event.location}</p>
            </>
          )}

          {variant === 'festival' && (
            <p className="text-gray-800 dark:text-gray-200">{event.description}</p>
          )}

          {variant === 'default' && (
            <span className="mt-4 inline-block bg-[#0071e3] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              {buttonLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );

  return (
    <Link href={event.ticketUrl} passHref legacyBehavior>
      <a className="block no-underline">{cardContent}</a>
    </Link>
  );
}
