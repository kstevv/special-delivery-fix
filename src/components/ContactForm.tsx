'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch('https://formspree.io/f/meokkeap', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="px-6 py-16 max-w-2xl mx-auto text-black dark:text-white">
    
        <h1 className="text-4xl font-bold mb-6 text-center">Connect With Us</h1>
        <p className="text-center text-gray-800 dark:text-gray-200">
          Have questions, booking inquiries, or want to collaborate?</p>
          <p className="text-center text-gray-800 dark:text-gray-200">Drop us a message — we’d love to hear from you.
        </p>
<div className="px-1 pt-6 max-w-2xl mx-auto">
      <div className="w-full max-w-2xl space-y-8">
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
                className="mt-2 w-full dark:bg-black border border-gray-600 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full dark:bg-black border border-gray-600 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full dark:bg-black border border-gray-600 rounded-xl py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0071e3]"
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
          Or email us directly at <a href="mailto:info@yourcompany.com" className="underline">Specialdeliverytexas@gmail.com</a>
        </div>
      </div>
    </div>
    </section>
  );
}
