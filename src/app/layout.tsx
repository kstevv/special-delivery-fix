import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Delivery Presents | Events and Festivals',
  description:
    'Special Delivery Presents is the leading independent promoter across the United States for Events and Festivals.',
  openGraph: {
    title: 'Special Delivery Presents | Events and Festivals',
    description:
      'Special Delivery Presents is the leading independent promoter across the United States for Events and Festivals.',
    url: 'https://specialdeliverypresents.com',
    siteName: 'Special Delivery Presents',
    images: [
      {
        url: 'https://specialdeliverypresents.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Special Delivery Presents Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Delivery Presents | Events and Festivals',
    description:
      'Special Delivery Presents is the leading independent promoter across the United States for Events and Festivals.',
    images: ['https://specialdeliverypresents.com/og-image.jpg'],
  },
  metadataBase: new URL('https://specialdeliverypresents.com'),
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Special Delivery Presents',
              url: 'https://specialdeliverypresents.com',
              logo: 'https://specialdeliverypresents.com/images/logos/SD_Logo.jpg',
              sameAs: [
                'https://www.instagram.com/specialdeliverytx/',
                'https://www.facebook.com/specialdeliverypresents',
              ],
            }),
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '501478405515549');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* recaptcha script */}
         <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=501478405515549&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
