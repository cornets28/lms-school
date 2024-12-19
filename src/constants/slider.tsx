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
    label: "Primary School",
    icon: <Fitness />,
    path: "fitness",
  },
  {
    id: "2",
    label: "Technical School",
    icon: <Music />,
    path: "music",
  },
  {
    id: "3",
    label: "University",
    icon: <Buisness />,
    path: "buisness",
  },
  {
    id: "4",
    label: "Training",
    icon: <LifeStyle />,
    path: "lifestyle",
  },
  // {
  //   id: "5",
  //   label: "Personal Development",
  //   icon: <PersonalDevelopment />,
  //   path: "personal-development",
  // },
  // {
  //   id: "6",
  //   label: "Social Media",
  //   icon: <SocialMedia />,
  //   path: "social-media",
  // },
  // {
  //   id: "7",
  //   label: "Tech",
  //   icon: <Tech />,
  //   path: "tech",
  // },
]
