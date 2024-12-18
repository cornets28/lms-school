import { SwiperProps } from "swiper/react"

export type SliderTypes = {
  children: React.ReactNode
  overlay?: boolean
  label?: string
} & SwiperProps