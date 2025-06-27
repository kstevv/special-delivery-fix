import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import galleries from '../../../data/galleries';
import GalleryDetail from '../../../components/GalleryDetail';


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return {};

  return {
    title: `${gallery.title} | Gallery | Special Delivery Presents`,
    description: `Photos from ${gallery.title} on ${gallery.date}. View the full gallery.`,
  };
}

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export default function GallerySlugPage({ params }: { params: { slug: string } }) {
  const gallery = galleries.find((g) => g.slug === params.slug);
  if (!gallery) return notFound();

  return <GalleryDetail gallery={gallery} />;
}