import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className, title = "Qasim" }: LogoProps) {
  return (
    <svg
      className={cn("site-logo", className)}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect
        x="6"
        y="10"
        width="52"
        height="44"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {Array.from({ length: 6 }, (_, index) => (
        <g key={index}>
          <rect x="2" y={14 + index * 6.5} width="6" height="3.5" fill="currentColor" />
          <rect x="56" y={14 + index * 6.5} width="6" height="3.5" fill="currentColor" />
        </g>
      ))}
      <path
        d="M24 22c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14zm0 6c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
        fill="currentColor"
      />
      <path d="M36.5 38.5 44 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
