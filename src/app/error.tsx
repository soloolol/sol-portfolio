'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">앗! 오류가 발생했어요 😵</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        문제가 생겼지만 걱정 마세요. 곧 해결할게요!
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          다시 시도하기
        </button>
        <button
          onClick={() => router.push('/')}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition-colors duration-300"
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}
