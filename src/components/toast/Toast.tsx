interface ToastProps {
  message: string;
}

function Toast({ message }: ToastProps) {
  return (
    <div className="flex items-center justify-center mx-auto w-fit py-2 px-10 rounded-full bg-blue-200/70 animate-bounce">
      <p className="flex items-center text-sm font-bold">{message}</p>
    </div>
  );
}

export default Toast;
