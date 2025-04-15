import { ReactNode } from "react";

export function Card({
  className,
  icon,
  title,
  message,
}: {
  className?: string;
  icon: ReactNode;
  title: string;
  message: string;
}) {
  return (
    <div
      className={`card grow-1 max-w-96 h-fit min-h-56 bg-base-100 shadow-sm ${className}`}
    >
      <span className="bg-violet-950 rounded-full p-6 w-20 h-20 ml-6 -mt-12 text-cyan-500 text-3xl text-center flex">
        {icon}
      </span>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-400">{message}</p>
      </div>
    </div>
  );
}
