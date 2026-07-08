import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-5xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div
      className={`mx-auto w-full ${sizes[size]} px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24 ${className}`}
    >
      {children}
    </div>
  );
}