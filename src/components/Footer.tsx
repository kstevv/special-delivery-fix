'use client';

import { useEffect, useState } from "react";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real form handling or Formspree
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-12 mt-0">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Newsletter Signup */}
        <section aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading" className="text-2xl font-bold mb-2">Stay Up To Date</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to get updates on events, releases, and exclusive offers.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-lg mx-auto"
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2 rounded-l-full bg-white dark:bg-black border ${
                email ? "border-[#0071e3]" : "border-gray-700"
              } text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0071e3] transition-colors duration-200`}
            />
            <button
              type="submit"
              className="bg-neutral-800 hover:bg-neutral-700 px-5 py-2 rounded-r-full border border-l-0 border-gray-700 text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* Social Media Icons */}
        <nav className="mt-10 flex justify-center gap-6" aria-label="Social media">
          <a
            href="https://www.facebook.com/specialdeliverypresents"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="text-gray-400 hover:text-white transition" />
          </a>
          <a
            href="https://www.instagram.com/specialdeliverytx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="text-gray-400 hover:text-white transition" />
          </a>
          <a
            href="https://x.com/SDPresentsTX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-gray-400 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.94 3h3.54l3.31 4.67L17.75 3H21l-5.9 7.4L21.83 21h-3.56l-4.08-5.74L9.25 21H6l6.14-7.9L6.94 3Z" />
            </svg>
          </a>
        </nav>

        <p className="mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Special Delivery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
