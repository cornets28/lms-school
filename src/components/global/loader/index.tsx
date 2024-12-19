import React from "react"
import { CircularProgress, Box } from "@mui/material"
import colors from "@/utils/theme/base/colors"
import { PaymentLoaderTypes } from "@/types/PaymentLoaderTypes"

export const Loader = ({ loading, children, className }: PaymentLoaderTypes) => {
  const { purple } = colors

  return loading ? (
    <Box
      className={className}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <CircularProgress
        size={40}
        sx={{
          color: purple[700],
          animationDuration: "1.4s",
        }}
      />
    </Box>
  ) : (
    <>{children}</>
  )
}
