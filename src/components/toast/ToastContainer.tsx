'use client';

import { useState, useEffect } from 'react';
import { getToasts, subscribe } from './store';
import Toast from './Toast';

export function ToastContainer() {
  const [__, setRender] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribe(() => setRender((prev) => prev + 1));
    return () => unsubscribe();
  }, []);

  const toasts = getToasts();

  return (
    <div className="fixed bottom-20 right-4 z-30 w-full flex flex-col gap-2">
      {toasts.map(({ id, message }) => (
        <div key={id}>
          <Toast message={message} />
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
