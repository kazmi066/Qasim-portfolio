import { useId } from "react";

import { cn } from "@/lib/utils";

export function InstagramMark({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId();

  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#${id})`} />
      <circle
        cx="12"
        cy="12"
        r="4.15"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle cx="17.15" cy="6.85" r="1.15" fill="#fff" />
    </svg>
  );
}
