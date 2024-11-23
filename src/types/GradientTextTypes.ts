import { ReactNode } from "react"
import { TypographyProps } from "@mui/material"

export interface GradientTextTypes extends Omit<TypographyProps, 'children'> {
  startColor?: string
  midColor?: string
  endColor?: string
  children: ReactNode
  style?: React.CSSProperties
}