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

  return (
    <Box
      sx={{
        bgcolor: selected === label ? purple[200] : purple[100],
        display: "flex",
        gap: 1,
        p: 1,
        cursor: "pointer",
        border: `1px solid ${selected === label ? "green" : "red"}`,
        borderRadius: 2,
        color: grey[100]
      }}
    >
      {icon}
      {label}
    </Box>
  )
}
