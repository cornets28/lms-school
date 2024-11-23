import { LinkProps as MuiLinkProps } from "@mui/material"
import { LinkProps as NextLinkProps } from "next/link"

export type CustomLinkType = Omit<MuiLinkProps, "href"> &
  Pick<NextLinkProps, "href"> & {
    noUnderline?: boolean
  }
