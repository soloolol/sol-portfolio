interface ToastProps {
  text: string;
  duration?: number;
}

function Toast({ text, duration = 3 }: ToastProps) {
  console.log(duration);
  return (
    <div
      id="bottom-banner"
      className="fixed bottom-20 start-0 z-50 flex justify-center w-full animate-bounce"
    >
      <div className="flex items-center justify-center mx-auto w-fit py-2 px-10 rounded-full bg-green-400/70 border-2 border-green-400">
        <p className="flex items-center text-sm font-bold dark:text-gray-100">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Toast;
