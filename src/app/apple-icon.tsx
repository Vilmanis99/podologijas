import { renderBrandIcon } from "@/lib/brand-icon";

// 180x180 is the size iOS asks for on modern devices.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return renderBrandIcon(size.width);
}
