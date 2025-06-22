'use client';

import { useEffect, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Run invisible reCAPTCHA
    (window as any).grecaptcha.ready(() => {
      (window as any).grecaptcha.execute('6Ldkg2krAAAAAJrfbACNDM78EOTVwi6NzP82nOOr', { action: 'submit' }).then(async (token: string) => {
        if (!token) {
          alert('CAPTCHA validation failed.');
          return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append('g-recaptcha-response', token); // Attach token

        await fetch('https://formspree.io/f/meokkeap', {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        setSubmitted(true);
        form.reset();
      });
    });
  };

  return (
    <section className="px-6 pt-10 pb-20 max-w-2xl mx-auto text-black dark:text-white">      
      <p className="text-center text-gray-800 dark:text-gray-200 mb-8">
        Have questions, booking inquiries, or want to collaborate? <br /> Drop us a message — we’d love to hear from you.
      </p>

      {submitted ? (
        <p className="text-center text-green-400">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full dark:bg-black border border-gray-600 rounded-xl py-3 px-4"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full dark:bg-black border border-gray-600 rounded-xl py-3 px-4"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-2 w-full dark:bg-black border border-gray-600 rounded-xl py-3 px-4"
              placeholder="What can we help you with?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0071e3] hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-12 text-center text-gray-400 text-sm">
        Or email us directly at <a href="mailto:Specialdeliverytexas@gmail.com" className="underline">Specialdeliverytexas@gmail.com</a>
      </div>

      {/* Invisible reCAPTCHA badge */}
      <div className="g-recaptcha" data-sitekey="6Ldkg2krAAAAAJrfbACNDM78EOTVwi6NzP82nOOr" data-size="invisible" data-badge="bottomright"></div>
    </section>
  );
}
