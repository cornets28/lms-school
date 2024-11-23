'use client'

import type { FC } from "react";
import Page from "@/components/global/page";
import colors from "@/utils/theme/base/colors";
import ShowLandingPage from "./_component/ShowLandingPage";

export const Settings: FC = () => {
  const { black } = colors;

  return (
    <Page pageColor={black.main}>
      <ShowLandingPage/>
    </Page>
  );
};

export default Settings;
