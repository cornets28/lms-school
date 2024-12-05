import { Page } from "@/components/global/page"
import { LandingPageLayoutTypes } from "@/types/LandingPageLayoutTypes"
import colors from "@/utils/theme/base/colors"
import React, { FC } from "react"

const LandingPageLayout: FC<LandingPageLayoutTypes> = ({ children }) => {
  const { black } = colors
  return <Page pageColor={black.main}>{children}</Page>
}

export default LandingPageLayout
