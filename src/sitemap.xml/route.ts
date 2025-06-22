import events from '../data/events';
import festivals from '../data/festivals';
import galleries from '../data/galleries';

export async function GET() {
  const baseUrl = 'https://www.sdpresents.com';

  const staticRoutes = ['', '/events', '/gallery', '/about', '/contact'].map(
    (path) => `<url><loc>${baseUrl}${path}</loc></url>`
  );

  const galleryRoutes = galleries
    .filter((g) => g.slug) // safeguard
    .map(
      (g) => `<url><loc>${baseUrl}/gallery/${g.slug}</loc></url>`
    );

  const eventRoutes = events.map((e) => {
    const slug = e.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    return `<url><loc>${baseUrl}/events#${slug}</loc></url>`;
  });

  const festivalRoutes = festivals.map((f) => {
    const slug = f.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    return `<url><loc>${baseUrl}/festivals#${slug}</loc></url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticRoutes, ...galleryRoutes, ...eventRoutes, ...festivalRoutes].join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
