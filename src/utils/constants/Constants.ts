import { EditIcon, DeleteIcon, DuplicateIcon, HideIcon } from "@/assets";

export const Breakpoints = {
  xs: "440px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

export const classMenu = [
  {
    label: "Modifye kou sa",
    icon: EditIcon,
  },
  {
    label: "Kopye kou sa",
    icon: DuplicateIcon,
  },
  {
    label: "Kache kou sa",
    icon: HideIcon,
  },
  {
    label: "Efase kou sa",
    icon: DeleteIcon,
  },
];

export const RegexNoWhiteSpace = /^\S*$/;
