"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/Label"
import { SCHOOL_CONSTANTS } from "@/constants"
import Link from "next/link"
import "swiper/css/bundle"
import { SwiperSlide } from "swiper/react"
import { Slider } from "../slider"
import { SchoolTypeItem } from "./SchoolTypeItem"
import "swiper/css/bundle"
import { SchoolTypeListSliderTypes } from "@/types/SchoolTypeListSliderTypes"

const SchoolTypeListSlider = ({
  overlay,
  label,
  register,
  selected,
  route,
  ...rest
}: SchoolTypeListSliderTypes) => {
  return (
    <Slider
      slidesPerView={"auto"}
      spaceBetween={10}
      loop
      freeMode
      label={label}
      overlay={overlay}
      {...rest}
      style={{ marginLeft: -30}}
    >
       {SCHOOL_CONSTANTS.schoolList.map((item, i) => (
        <SwiperSlide key={item.id} className="content-width-slide">
          {!register ? (
            route ? (
              <Link href={`/explore/${item.path}`}>
                <SchoolTypeItem {...item} selected={selected} />
              </Link>
            ) : (
              <SchoolTypeItem {...item} />
            )
          ) : (
            i > 0 && (
              <Label htmlFor={`item-${item.id}`}>
                <span>
                  <Input
                    id={`item-${item.id}`}
                    type="radio"
                    value={item.path}
                    style={{ display: "none"}}
                    {...register("category")}
                  />
                  <SchoolTypeItem {...item} selected={selected} />
                </span>
              </Label>
            )
          )}
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default SchoolTypeListSlider


