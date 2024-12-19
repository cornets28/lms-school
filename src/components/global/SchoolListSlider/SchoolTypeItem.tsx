"use client"

import { Box } from "@/components/mui/Box"
import { SchoolTypeItemTypes } from "@/types/SchoolTypeItemTypes"
import colors from "@/utils/theme/base/colors"

export const SchoolTypeItem = ({
  icon,
  label,
  selected,
}: SchoolTypeItemTypes) => {
  const { purple, grey } = colors

  const capitalizeFirstLetter = (str: string) =>{
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Box
      sx={{
        bgcolor: selected && capitalizeFirstLetter(selected) === label ? purple[200] : purple[100],
        display: "flex",
        gap: 1,
        p: 1,
        cursor: "pointer",
        border: `1px solid ${selected && capitalizeFirstLetter(selected) === label ? purple[200] : purple[100]}`,
        borderRadius: 2,
        color: grey[100]
      }}
    >
      {icon}
      {label}
    </Box>
  )
}
