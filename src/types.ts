export type EventVariant = 'default' | 'gallery' | 'festival' | 'event';

export interface EventType {
  title: string;
  date: string;
  location: string;
  venue?: string;
  image: string;
  description?: string;
  ticketUrl?: string;
  slug?: string;
}