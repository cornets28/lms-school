import React from "react"
import Text from "@/components/global/paragraph/Text"
import colors from "@/utils/theme/base/colors"
import typography from "@/utils/theme/base/typography"
import { Grid } from "@/components/mui/Grid"

const AppHeader = () => {
  const { purple } = colors
  const { h5 } = typography

  return (
    <Grid container item xs={12} sx={{ height: 30, zIndex: 10, pl: 2, mt: -4 }}>
      <Text
        fontSize={h5}
        color={purple[700]}
        tag="div"
        textAlign="left"
        fontWeight={900}
        text="HaySam."
      />
    </Grid>
  )
}

export default AppHeader
