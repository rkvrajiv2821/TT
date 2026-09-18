import {
  User,
  Building2,
  IdCard,
  Award,
  Megaphone,
  CreditCard,
  Smartphone,
  Cloud,
  Database,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type CoreNode = {
  id: string;
  label: string;
  icon: LucideIcon;
};

// The ten ecosystem nodes from design-direction.md's "Connected Core" concept.
export const CORE_NODES: CoreNode[] = [
  { id: "customer", label: "Customer", icon: User },
  { id: "venue", label: "Venue", icon: Building2 },
  { id: "membership", label: "Membership", icon: IdCard },
  { id: "loyalty", label: "Loyalty", icon: Award },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "cloud", label: "Cloud", icon: Cloud },
  { id: "data", label: "Data", icon: Database },
  { id: "integrations", label: "Integrations", icon: Plug },
];
