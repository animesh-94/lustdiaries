import { cn } from "@/lib/utils";

interface AdSlotProps {
  slotId: string;
  format?: "horizontal" | "rectangle";
  className?: string;
}

/**
 * CLS-safe advertisement container with reserved height and clear disclosure
 * for ad-supported editorial pages. Replace the inner placeholder with your
 * ad network tag (e.g., Google AdSense / GAM) when deploying live campaigns.
 */
export function AdSlot({
  slotId,
  format = "horizontal",
  className,
}: AdSlotProps) {
  const heightClass =
    format === "rectangle" ? "min-h-[260px]" : "min-h-[104px]";

  return (
    <aside
      aria-label="Advertisement"
      data-ad-slot={slotId}
      className={cn(
        "w-full rounded-2xl border border-dashed border-[#DFD1EC] bg-[#F8F4FC]/80 px-4 py-3 flex flex-col items-center justify-center text-center",
        heightClass,
        className
      )}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#7E728A]">
        Advertisement
      </span>
      <p className="mt-1 text-xs text-[#8D8199]">
        Reserved CLS-safe ad slot ({slotId})
      </p>
    </aside>
  );
}

