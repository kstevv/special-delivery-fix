'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <>{children}</>;
}
