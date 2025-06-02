'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import FocusTrap from 'focus-trap-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 h-16 bg-white dark:bg-black bg-opacity-100 backdrop-blur border-b border-gray-700">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full">
          <Link href="/" className="text-xl font-bold text-black dark:text-white">
            Special Delivery
          </Link>
          <div className="hidden sm:flex gap-4 text-black dark:text-white text-lg items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 transition rounded ${
                  pathname === link.href
                    ? 'text-white bg-[#0071e3]'
                    : 'hover:bg-[#0071e3] dark:hover:bg-[#0071e3] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <button className="sm:hidden text-black dark:text-white" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={closeMenu}
          />
          <FocusTrap>
            <div className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white dark:bg-black px-6 py-8 pt-12 flex flex-col space-y-6 text-lg z-50 sm:hidden">
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition"
              >
                <X size={28} />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 text-center text-black dark:text-white rounded transition ${
                    pathname === link.href
                      ? 'text-white bg-[#0071e3] dark:bg-[#0071e3]'
                      : 'hover:bg-[#0071e3] dark:hover:bg-[#0071e3] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </FocusTrap>
        </>
      )}
    </>
  );
}
