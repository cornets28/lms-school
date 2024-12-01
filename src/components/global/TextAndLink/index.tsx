"use client"

import { FC } from "react"
import { Typography } from "../../../components/mui/Typography"
import typography from "../../../utils/theme/base/typography"
import colors from "../../../utils/theme/base/colors"
import { useAuthStyle } from "./styles/useAuthStyle"
import { TextAndLinkType } from "@/types/TextAndLinkType"
import Link from "next/link"

const TextAndLink: FC<TextAndLinkType> = ({
  description,
  routeName,
  route,
}) => {
  const { grey } = colors
  const { size, fontWeightBold } = typography
  const classes = useAuthStyle()
  return (
    <Typography
      fontSize={size.xs}
      color={grey[700]}
      component="div"
      fontWeight={fontWeightBold}
      textAlign="left"
      marginTop={-3}
    >
      {description}{" "}
      <Link
        href={route}
        passHref
        style={{
          textDecoration: "none",
        }}
        className={classes.redirect}
      >
        {routeName}
      </Link>
    </Typography>
  )
}

export default TextAndLink
