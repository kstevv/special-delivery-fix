'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import FocusTrap from 'focus-trap-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-black bg-opacity-100 backdrop-blur border-b border-gray-700">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-black dark:text-white">Special Delivery</Link>
          <div className="hidden sm:flex gap-6 text-black dark:text-white text-lg">
            <Link href="/events">Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <ThemeToggle />
          </div>
          <button className="sm:hidden text-black dark:text-white" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={closeMenu} />
          <FocusTrap>
            <div className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white dark:bg-black px-6 py-8 pt-12 space-y-6 text-lg z-50 sm:hidden">
              <button onClick={closeMenu} className="absolute top-4 right-4 text-black dark:text-white">
                <X size={28} />
              </button>
              <Link href="/events" onClick={closeMenu}>Events</Link>
              <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
              <ThemeToggle />
            </div>
          </FocusTrap>
        </>
      )}
    </>
  );
}
