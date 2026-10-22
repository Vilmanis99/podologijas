import type { ComponentPropsWithoutRef } from "react";
import { dict, type Lang } from "@/i18n/dictionaries";
import { BOOKING_URL, ONLINE_BOOKING_AVAILABLE, PHONE } from "@/lib/site";

type BookingLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "target" | "rel"
> & {
  lang: Lang;
  compact?: boolean;
};

export default function BookingLink({
  lang,
  compact = false,
  children,
  ...props
}: BookingLinkProps) {
  const t = dict[lang].booking;

  return (
    <a
      {...props}
      href={ONLINE_BOOKING_AVAILABLE ? BOOKING_URL : `tel:${PHONE}`}
      target={ONLINE_BOOKING_AVAILABLE ? "_blank" : undefined}
      rel={ONLINE_BOOKING_AVAILABLE ? "noopener noreferrer" : undefined}
    >
      {ONLINE_BOOKING_AVAILABLE ? children : compact ? t.callShort : t.call}
    </a>
  );
}
