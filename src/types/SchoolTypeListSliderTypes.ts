import { UseFormRegister } from "react-hook-form"
import { SwiperProps } from "swiper/react"

export type SchoolTypeListSliderTypes = {
  overlay?: boolean
  label?: string
  register?: UseFormRegister<any>
  selected?: string
  route?: boolean
} & SwiperProps