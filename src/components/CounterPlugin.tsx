'use client';

import { useLightboxState } from 'yet-another-react-lightbox';

export default function CounterPlugin({ total }: { total: number }) {
  const { currentIndex } = useLightboxState();

  if (typeof currentIndex !== 'number') return null;

  return (
    <div className="absolute bottom-[105px] left-1/2 -translate-x-1/2 z-[9999] bg-black/70 text-white px-3 py-1 rounded text-sm shadow">
      {currentIndex + 1} / {total}
    </div>
  );
}
