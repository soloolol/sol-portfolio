import { generateId } from '@/utils/generateId';

type ToastItem = { id: string; message: string; duration?: number };

const toastList = new Map<string, ToastItem>();
let listeners: (() => void)[] = [];

export const subscribe = (listener: () => void) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};

export const notify = () => {
  listeners.forEach((listener) => listener());
};

export const toast = ({ message, duration = 1500 }: Omit<ToastItem, 'id'>) => {
  const id = generateId();
  toastList.set(id, { id, message, duration });
  notify();

  setTimeout(() => {
    toastList.delete(id);
    notify();
  }, duration);
};

export const getToasts = () => Array.from(toastList.values());
