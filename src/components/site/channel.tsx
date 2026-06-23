import { Mail, MessagesSquare, MessageCircle, type LucideIcon } from "lucide-react";
import type { ChannelKey, Outcome } from "@/lib/content";
import { cn } from "@/lib/utils";

const channelIcon: Record<ChannelKey, LucideIcon> = {
  mail: Mail,
  chat: MessagesSquare,
  whatsapp: MessageCircle,
};

/** Pallino-icona del canale. */
export function ChannelGlyph({
  channel,
  className,
}: {
  channel: ChannelKey;
  className?: string;
}) {
  const Icon = channelIcon[channel];
  return (
    <span
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-full border border-border bg-paper text-ink",
        className,
      )}
    >
      <Icon className="size-4" strokeWidth={2} />
    </span>
  );
}

export const outcomeStyle: Record<
  Outcome,
  { dot: string; text: string; ring: string }
> = {
  risolto: {
    dot: "bg-teal",
    text: "text-teal",
    ring: "ring-teal/25 bg-teal-soft/60",
  },
  ticket: {
    dot: "bg-ink/60",
    text: "text-ink/80",
    ring: "ring-ink/15 bg-sand",
  },
  operatore: {
    dot: "bg-persimmon",
    text: "text-persimmon",
    ring: "ring-persimmon/25 bg-persimmon-soft/70",
  },
};
