import { cn } from "@/lib/utils";

export function LumaSpin({ className }: { className?: string }) {
  return (
    <div className={cn("luma-spin", className)} aria-hidden="true">
      <span />
      <span />
    </div>
  );
}
