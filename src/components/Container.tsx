import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 rounded-lg my-6 sm:my-10 w-full max-w-screen-xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
