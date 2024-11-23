import { CreditCard, Explore, Home } from "@/assets"
import { MenuType } from "@/types/MenuType"

export const LANDING_PAGE_MENU: MenuType[] = [
  {
    id: 0,
    label: "Home",
    icon: <Home />,
    path: "/",
    section: true,
  },
  {
    id: 1,
    label: "Pricing",
    icon: <CreditCard />,
    path: "#pricing",
    section: true,
  },
  {
    id: 2,
    label: "Explore",
    icon: <Explore />,
    path: "/explore",
  },
]
