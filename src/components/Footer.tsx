'use client';

import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
      const [email, setEmail] = useState("");

  return (
    <footer className="bg-black text-white text-center py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
        {/* Newsletter Signup */}
        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
        <p className="text-gray-400 mb-6">
          Subscribe to get updates on events, releases, and exclusive offers.
        </p>
        <form className="flex w-full max-w-lg mx-auto">
        <input
  type="email"
  placeholder="Your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className={`w-full px-4 py-2 rounded-l-full bg-white dark:bg-black border ${
    email ? "border-blue-500" : "border-gray-700"
  } text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors duration-200`}
  required
/>
  <button
    type="submit"
    className="bg-neutral-800 hover:bg-neutral-700 px-5 py-2 rounded-r-full border border-l-0 border-gray-700 text-white font-semibold transition"
  >
    Subscribe
  </button>
</form>
</div>

        {/* Social Icons */}
<div className="mt-10 flex justify-center gap-6">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <Facebook className="text-gray-400 hover:text-white transition" />
  </a>
  <a href="https://www.instagram.com/specialdeliverytx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <Instagram className="text-gray-400 hover:text-white transition" />
  </a>
  <a
  href="https://x.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="X"
  className="text-gray-400 hover:text-white transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6.94 3h3.54l3.31 4.67L17.75 3H21l-5.9 7.4L21.83 21h-3.56l-4.08-5.74L9.25 21H6l6.14-7.9L6.94 3Z" />
  </svg>
</a>

</div>
        <br/><br/>
      <p className="text-sm">© {new Date().getFullYear()} Special Delivery. All rights reserved.</p>
    </footer>
  );
}
