import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Special Delivery | Live Events & Festivals in Texas',
  description:
    'Learn more about Special Delivery Presents – an Austin-based production company behind ILLfest and premier electronic music events across Texas.',
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/images/about.jpg"
          alt="Festival Crowd"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            About Special Delivery
          </h1>
        </div>
      </section>

      {/* Section 1 - Mobile Paragraph Above Image */}
      <section className="block md:hidden pt-10 pb-10 max-w-4xl mx-auto text-base leading-relaxed font-semibold px-6">
        <p>
          SPECIAL DELIVERY PRESENTS is brought to you by the founders of
          Collapse Dance Event and ILLfest Music & Arts Festival! Based in
          Texas, we bring Austin, Dallas, Houston, and more the best experiences
          in dance music — from your favorite clubs to top-notch festivals.
          We’re excited to be back. See you on the dance floor!
        </p>
      </section>

      <section className="relative w-full h-[300px] md:h-[600px]">
        <Image
          src="/images/about-1.jpg"
          alt="Stage Performance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 hidden md:block" />
        <div className="absolute inset-0 items-center justify-center px-4 hidden md:flex">
          <p className="text-white text-md md:text-2xl leading-relaxed max-w-3xl font-bold">
            SPECIAL DELIVERY PRESENTS is brought to you by the founders of
            Collapse Dance Event and ILLfest Music & Arts Festival! Based in
            Texas, we bring Austin, Dallas, Houston, and more the best experiences
            in dance music — from your favorite clubs to top-notch festivals.
            We’re excited to be back. See you on the dance floor!
          </p>
        </div>
      </section>

      {/* Section 2 - Mobile Paragraph Above Image */}
      <section className="block md:hidden pt-8 pb-8 max-w-4xl mx-auto text-base leading-relaxed font-semibold px-6">
        <p>
          Special Delivery Presents is a multi-service & multi-genre music event
          production company based in Austin, Texas. We create unforgettable
          experiences with the world’s best lighting, sound, and special effects
          — producing events like ILLfest and Envision Festival.
        </p>
      </section>

      <section className="relative w-full h-[300px] md:h-[600px]">
        <Image
          src="/images/about-2.jpg"
          alt="Festival Crowd"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 hidden md:block" />
        <div className="absolute inset-0 items-center justify-center px-4 hidden md:flex">
          <p className="text-white text-md md:text-2xl leading-relaxed max-w-3xl font-bold">
            Special Delivery Presents is a multi-service & multi-genre music event
            production company based in Austin, Texas. We create unforgettable
            experiences with the world’s best lighting, sound, and special effects
            — producing events like ILLfest and Envision Festival.
          </p>
        </div>
      </section>
    </main>
  );
}
