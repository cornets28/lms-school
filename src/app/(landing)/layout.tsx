import { Page } from "@/components/global/page"
import colors from "@/utils/theme/base/colors"
import React from "react"

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { black } = colors
  return <Page pageColor={black.main}>{children}</Page>
}

export default LandingPageLayout
