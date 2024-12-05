import {
  Chat,
  Courses,
  Document,
  Grid,
  Heart,
  MegaPhone,
  WhiteLabel,
} from "@/assets"
import { CreateSchoolPlaceholderTypes } from "@/types/CreateSchoolPlaceholderTypes"


export const CREATE_SCHOOL_PLACEHOLDER: CreateSchoolPlaceholderTypes[] = [
  {
    id: "0",
    label: "Highly engaging",
    icon: <MegaPhone />,
  },
  {
    id: "1",
    label: "Easy to setup",
    icon: <Heart />,
  },
  {
    id: "2",
    label: "School chat and posts",
    icon: <Chat />,
  },
  {
    id: "3",
    label: "Students can create teams within Schools",
    icon: <Grid />,
  },
  {
    id: "4",
    label: "Gamification",
    icon: <Document />,
  },
  {
    id: "5",
    label: "Host unlimited courses",
    icon: <Courses />,
  },
  {
    id: "6",
    label: "White-labeling options",
    icon: <WhiteLabel />,
  },
]
