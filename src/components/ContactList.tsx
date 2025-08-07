'use client';

import { toast } from '@/components/toast/store';
import { handleCopyWithCallback } from '@/utils/clipboard';

export default function Contact() {
  return (
    <article className="max-sm:text-[15px]">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <a
          href="https://github.com/soloolol"
          target="_blank"
          className="flex items-center justify-center space-x-2 w-80 rounded-full bg-gray-700 shadow-gray-700/50 shadow-md text-gray-200 hover:scale-105 transition-transform duration-300"
        >
          <i className="fa-brands fa-github" />
          <span>GitHub</span>
        </a>
        <a
          href="https://torybean.tistory.com/"
          target="_blank"
          className="flex items-center justify-center space-x-2 w-80 rounded-full bg-amber-500 shadow-amber-500/50 shadow-md text-gray-200 hover:scale-105 transition-transform duration-300"
        >
          <i className="fa-brands fa-b" />
          <span>Blog</span>
        </a>
        <a
          onClick={() =>
            handleCopyWithCallback('soloolol.dev@gmail.com', () =>
              toast({ message: '클립보드에 복사되었습니다! 👏🏻' })
            )
          }
          className="flex items-center justify-center space-x-2 w-80 rounded-full bg-blue-400 shadow-blue-400/50 shadow-md text-gray-100 hover:scale-105 transition-transform duration-300"
        >
          <i className="fa-regular fa-envelope" />
          <span>E-mail</span>
        </a>
      </div>
    </article>
  );
}
