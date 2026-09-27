import type { ReactNode } from "react";
import PortalLayout from "@/components/PortalLayout";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <PortalLayout><div className="marketing-layout">{children}</div></PortalLayout>;
}
