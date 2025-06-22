import ContactForm from '../../components/ContactForm';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | Special Delivery Presents',
  description: 'Get in touch with Special Delivery for event inquiries, partnerships, and more.',
  openGraph: {
    title: 'Contact Us | Special Delivery Presents',
    description: 'Reach out to the team behind Special Delivery Presents for all inquiries.',
    url: 'https://specialdeliverypresents.com/contact',
    siteName: 'Special Delivery Presents',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Special Delivery Presents',
    description: 'Reach out to Special Delivery for booking, support, and partnership opportunities.',
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Header with full-width banner image */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/connect.png"
          alt="Contact Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Connect With Us
          </h1>
        </div>
      </section>
      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </main>
  );
}

