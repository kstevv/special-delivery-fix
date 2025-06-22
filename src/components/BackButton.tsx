'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-sm px-4 py-2 text-white bg-[#0071e3] rounded-md font-bold transition hover:bg-blue-600 self-center"
    >
      ← Back
    </button>
  );
}
