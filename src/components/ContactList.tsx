'use client';

import { toast } from '@/components/toast/store';

export default function Contact() {
  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text);
  };

  const handleCopyEmail = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    cb: () => void
  ) => {
    const email = e.currentTarget.querySelector('span')?.textContent;
    if (email) {
      copyToClipboard(email)
        .then(() => cb())
        .catch((error) => {
          console.error('복사 실패:', error);
        });
    }
  };
  return (
    <article className="bg-lime-100 shadow-md rounded-lg p-6 max-sm:text-[15px] max-sm:px-3 hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <a
          href="https://github.com/soloolol"
          target="_blank"
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
        >
          <i className="fa-brands fa-github" />
          <span>GitHub</span>
        </a>
        <a
          href="https://torybean.tistory.com/"
          target="_blank"
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
        >
          <i className="fa-brands fa-b" />
          <span>Blog</span>
        </a>
        <a
          onClick={(event) =>
            handleCopyEmail(event, () =>
              toast({ message: '클립보드에 복사되었습니다! 👏🏻' })
            )
          }
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
        >
          <i className="fa-regular fa-envelope" />
          <span>soloolol222@gmail.com</span>
        </a>
      </div>
    </article>
  );
}
