'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-white bg-[#0071e3] hover:bg-blue-600 transition px-4 py-2 rounded-md font-bold flex items-center self-start"
    >
      <ArrowLeft size={18} className="mr-2" />
      Back
    </button>
  );
}
