interface ToastProps {
  message: string;
}

function Toast({ message }: ToastProps) {
  return (
    <div className="flex items-center justify-center mx-auto w-fit py-2 px-10 rounded-full bg-green-400/70 border-2 border-green-400 animate-bounce">
      <p className="flex items-center text-sm font-bold dark:text-gray-100">
        {message}
      </p>
    </div>
  );
}

export default Toast;
