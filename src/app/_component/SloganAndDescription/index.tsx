import React from "react"
import colors from "@/utils/theme/base/colors"
import { Container } from "@/components/mui/Container"
import { Grid } from "@/components/mui/Grid"
import GradientText from "@/components/global/gradientText"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Breakpoints } from "@/utils/constants/Constants"

const SloganAnDescription = () => {
  const isMobile = useMediaQuery(`(max-width:${Breakpoints.sm})`)
  const { white, grey } = colors
  return (
    <Grid xs={12} sx={{ mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <GradientText
            variant={isMobile? "h4" : "h2" }
            fontWeight="bold"
            startColor={grey[600]}
            midColor={white.main}
            endColor={grey[600]}
          >
            Metye m se Avni m
          </GradientText>
          <GradientText
            variant="body1"
            mt={2}
            startColor={grey[100]}
            endColor={white.main}
            textAlign={"center"}
          >
            This is a longer text to demonstrate how the gradient looks on
            multiple lines. The gradient will be applied across the entire text,
            transitioning from grey to white.
          </GradientText>
        </Grid>
      </Container>
    </Grid>
  )
}

export default SloganAnDescription
