'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const logoSrc =
    resolvedTheme === 'dark'
      ? '/images/logos/SD_FullLogo_Dark.jpg'
      : '/images/logos/SD_FullLogo_Light.jpg';

  const navLinks = [
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 h-16 bg-white dark:bg-black bg-opacity-100 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-6 h-full"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center">
            {mounted && (
              <>
                <Image
                  src={logoSrc}
                  alt="Special Delivery Logo"
                  width={112}
                  height={55}
                  priority
                />
                <span className="sr-only">Home</span>
              </>
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex gap-4 text-black dark:text-white text-lg items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-2 transition rounded ${
                  pathname.startsWith(link.href)
                    ? 'text-white bg-[#0071e3]'
                    : 'hover:bg-[#0071e3] dark:hover:bg-[#0071e3] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile toggle and menu button */}
          <div className="flex items-center sm:hidden gap-3">
            <ThemeToggle />
            <button
              className="text-black dark:text-white"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      <Dialog
        as="div"
        className="sm:hidden"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <div className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Panel className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white dark:bg-black px-6 py-8 pt-12 flex flex-col space-y-6 text-lg z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-4 text-center text-black dark:text-white rounded transition ${
                pathname === link.href
                  ? 'text-white bg-[#0071e3] dark:bg-[#0071e3]'
                  : 'hover:bg-[#0071e3] dark:hover:bg-[#0071e3] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
