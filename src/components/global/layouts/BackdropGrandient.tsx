import React from "react"
import { Box, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

interface BackdropGradientProps {
  children: React.ReactNode
  sx?: SxProps
}

const BackdropGradient: React.FC<BackdropGradientProps> = ({
  children,
  sx,
}) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default BackdropGradient
