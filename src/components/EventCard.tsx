import Link from 'next/link';
import Image from 'next/image';
import type { EventType, EventVariant } from '../types';
import { formatLocalDate } from '../lib/formatDate';

interface EventCardProps {
  event: EventType;
  buttonLabel?: string;
  variant?: EventVariant;
}

export default function EventCard({
  event,
  buttonLabel = 'Buy Tickets',
  variant = 'default',
}: EventCardProps) {

  const cardContent = (
    <div
      style={{
        boxShadow:
          '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
      }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <img src={event.image} alt={event.title} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>

        {variant !== 'festival' && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{formatLocalDate(event.date)}</p>
        )}

        {(variant === 'default' || variant === 'event') && (
          <>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {event.location} - {event.venue}
            </p>
            {event.ticketUrl && (
              <Link href={event.ticketUrl} rel="noopener noreferrer">
                <span className="mt-4 inline-block bg-[#0071e3] text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition">
                  {buttonLabel}
                </span>
              </Link>
            )}
          </>
        )}

        {variant === 'festival' && event.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{event.description}</p>
        )}
      </div>
    </div>
  );

  if (variant === 'festival' && event.ticketUrl) {
    return (
      <a
        href={event.ticketUrl}
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {cardContent}
      </a>
    );
  }

  if (variant === 'gallery' && event.slug) {
    return (
      <Link href={`/gallery/${event.slug}`} className="block no-underline">
        {cardContent}
      </Link>
    );
  }

  return <div>{cardContent}</div>;
}
