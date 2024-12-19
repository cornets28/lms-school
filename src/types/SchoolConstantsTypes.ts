import { AuthFormTypes } from "@/constants/forms"
import { MenuType } from "./MenuType"
import { CreateSchoolPlaceholderTypes } from "./CreateSchoolPlaceholderTypes"
import { SchoolListTypes } from "@/constants/slider"

export type SchoolConstantsTypes = {
  landingPageMenu: MenuType[]
  signUpForm: AuthFormTypes[]
  signInForm: AuthFormTypes[]
  createSchoolPlaceholder: CreateSchoolPlaceholderTypes[]
  schoolList: SchoolListTypes[]
}
