import { cn } from "@/lib/utils";

/** Marchio Sintonia: onde concentriche "in sintonia". */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative inline-flex size-7 items-center justify-center rounded-[0.6rem] bg-ink">
        <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
          <circle cx="12" cy="12" r="2.4" fill="var(--persimmon)" />
          <path
            d="M16.6 7.4a6.5 6.5 0 0 1 0 9.2M7.4 7.4a6.5 6.5 0 0 0 0 9.2"
            fill="none"
            stroke="var(--paper)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        Sintonia
      </span>
    </span>
  );
}
