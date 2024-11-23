import React from "react"
import PublicNavbar from "@/components/global/layouts/PublicNavbar"
import SloganAnDescription from "../SloganAndDescription"
import CallToAction from "../CallToAction"
import DashboardSnippet from "../DashboardSnippet"

const ShowLandingPage = () => {
  return (
    <>
      <PublicNavbar />
      <SloganAnDescription />
      <CallToAction />
      <DashboardSnippet />
    </>
  )
}

export default ShowLandingPage
