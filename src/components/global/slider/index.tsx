"use client"

import React from "react"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper } from "swiper/react"
import { Label } from "../../ui/Label"
import { Box } from "@/components/mui/Box"
import { SliderTypes } from "@/types/SliderType"

export const Slider = ({ children, overlay, label, ...rest }: SliderTypes) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        marginTop: -1,
      }}
    >
      {overlay && (
        <>
          <Box
            sx={{
              position: "absolute",
              width: "40px",
              height: "100%",
              left: 0,
              zIndex: 50,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "40px",
              height: "100%",
              right: 0,
              zIndex: 50,
            }}
          />
        </>
      )}

      {label && <Label style={{ paddingLeft: 1 }}>{label}</Label>}

      <Box sx={{ mt: 1 }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          {...rest}
        >
          {children}
        </Swiper>
      </Box>
    </Box>
  )
}
