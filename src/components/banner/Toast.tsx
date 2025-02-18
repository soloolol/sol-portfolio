interface ToastProps {
  text: string;
  duration?: number;
}

function Toast({ text, duration = 3 }: ToastProps) {
  console.log(duration);
  return (
    <div
      id="bottom-banner"
      className="fixed bottom-20 start-0 z-50 flex justify-center w-full "
    >
      <div className="flex items-center justify-center mx-auto w-1/2 p-4 rounded-full bg-white-opacity-80 backdrop-blur-lg border-2 border-green-400">
        <p className="flex items-center text-sm font-bold dark:text-gray-100">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Toast;
