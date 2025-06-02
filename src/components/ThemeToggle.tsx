'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = saved === 'dark' || (!saved && prefersDark);
    document.documentElement.classList.toggle('dark', useDark);
    setIsDark(useDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle Dark Mode"
      className="text-black dark:text-white block py-2 px-2 text-lg transition rounded"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
