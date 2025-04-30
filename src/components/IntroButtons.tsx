'use client';

import { handleCopyWithCallback } from '@/utils/clipboard';
import { toast } from '@/components/toast/store';

export default function IntroButtons() {
  return (
    <div className="flex w-full justify-end text-gray-800 gap-2 text-sm font-medium">
      <button
        aria-label="copy email"
        className="px-4 py-1 rounded-full bg-gradient-to-r from-white to-blue-200 shadow hover:brightness-110"
        onClick={() =>
          handleCopyWithCallback('soloolol222@gmail.com', () =>
            toast({ message: '클립보드에 복사되었습니다! 👏🏻' })
          )
        }
      >
        <i className="pr-2 fa-regular fa-envelope" />
        E-mail
      </button>
      <a
        aria-label="download resume"
        href="/권솔_Resume.pdf"
        download
        className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-300 to-yellow-100 shadow hover:brightness-110"
      >
        <i className="pr-2 fa-solid fa-arrow-down" />
        Resume
      </a>
    </div>
  );
}
