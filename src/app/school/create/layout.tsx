import React, { FC } from "react"
import { Page } from "@/components/global/page"
import colors from "@/utils/theme/base/colors"
import { CreateSchoolLayoutTypes } from "@/types/CreateSchoolLayoutTypes"

const CreateSchoolLayout: FC<CreateSchoolLayoutTypes> = ({ children }) => {
  const { white } = colors
  return <Page pageColor={white.main}>{children}</Page>
}

export default CreateSchoolLayout
