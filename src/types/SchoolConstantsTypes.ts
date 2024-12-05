import { AuthFormTypes } from "@/constants/forms"
import { MenuType } from "./MenuType"
import { CreateSchoolPlaceholderTypes } from "./CreateSchoolPlaceholderTypes"

export type SchoolConstantsTypes = {
  landingPageMenu: MenuType[]
  signUpForm: AuthFormTypes[]
  signInForm: AuthFormTypes[]
  createSchoolPlaceholder: CreateSchoolPlaceholderTypes[]
}
