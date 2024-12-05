import React from "react"
import SchoolPlaceholder from "../SchoolPlaceholder"
import { useTranslation } from "react-i18next"
import { SCHOOL_CONSTANTS } from "@/constants"

const CreateSchoolInfo = () => {
  // const { t } = useTranslation();

  return (
    <SchoolPlaceholder
      header2={"Create your own school"}
      schoolMissionDescription="We strive to create a dynamic learning environment that inspires
            students to excel academically, grow personally.."
      list={SCHOOL_CONSTANTS.createSchoolPlaceholder}
    />
  )
}

export default CreateSchoolInfo
