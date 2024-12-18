"use client"

import * as React from "react"
import Typography from "@mui/material/Typography"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label"> & { disabled?: boolean }
>(({ disabled, style, ...props }, ref) => (
  <Typography
    ref={ref}
    component="label"
    {...props}
    sx={{
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "default",
      opacity: disabled ? 0.7 : 1,
      ...style,
    }}
  />
))

Label.displayName = "MUILabel"

export { Label }
