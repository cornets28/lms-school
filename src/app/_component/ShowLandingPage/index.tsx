import React from "react"
import PublicNavbar from "@/components/global/layouts/PublicNavbar"
import SloganAnDescription from "../SloganAndDescription"
import CallToAction from "../CallToAction"
import DashboardSnippet from "../DashboardSnippet"
import Pricing from "../Pricing"

const ShowLandingPage = () => {
  return (
    <>
      <PublicNavbar />
      <SloganAnDescription />
      <CallToAction />
      <DashboardSnippet />
      <Pricing />
    </>
  )
}

export default ShowLandingPage
