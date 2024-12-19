import { RefreshCcw } from "lucide-react"
import {
  Buisness,
  Fitness,
  LifeStyle,
  Music,
} from "@/assets"

export type SchoolListTypes = {
  id: string
  label: string
  icon: JSX.Element
  path: string
}

export const SCHOOL_LIST: SchoolListTypes[] = [
  {
    id: "0",
    label: "All",
    icon: <RefreshCcw />,
    path: "",
  },
  {
    id: "1",
    label: "Fitness",
    icon: <Fitness />,
    path: "fitness",
  },
  {
    id: "2",
    label: "Music",
    icon: <Music />,
    path: "music",
  },
  {
    id: "3",
    label: "Buisness",
    icon: <Buisness />,
    path: "buisness",
  },
  {
    id: "4",
    label: "Lifestyle",
    icon: <LifeStyle />,
    path: "lifestyle",
  },
]
