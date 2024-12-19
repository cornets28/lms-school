import React from "react"
import colors from "@/utils/theme/base/colors"
import { Container } from "@/components/mui/Container"
import { Grid } from "@/components/mui/Grid"
import { Box } from "@/components/mui/Box"
import CustomButton from "@/components/buttons/CustomButton"
import { purple } from "@mui/material/colors"
import CustomLink from "@/components/global/customLink"
import { Breakpoints } from "@/utils/constants/Constants"
import useMediaQuery from "@mui/material/useMediaQuery"

const CallToAction = () => {
  const { white, black, grey, error, yellow } = colors
  const isMobile = useMediaQuery(`(max-width:${Breakpoints.sm})`)

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" sx={{ mt: 3, mb: 5 }}>
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={4}
          lg={4}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6}>
            <Box px={1} mx="auto">
              <CustomButton
                bgColorHover={yellow[900]}
                borderColorHover={error.focus}
                labelColorHover={white.main}
                variant="outlined"
                bgColor={grey[900]}
                labelColor={grey[400]}
                borderColor={grey[900]}
              >
                Watch Demo
              </CustomButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: isMobile ? 2 : 0 }}>
            <Box px={1} mx="auto">
              <CustomLink href="/sign-up">
                <CustomButton
                  bgColorHover={purple[700]}
                  borderColorHover={purple[700]}
                  labelColorHover={grey[100]}
                  variant="outlined"
                  bgColor={grey[100]}
                  labelColor={black.main}
                  borderColor={grey[100]}
                >
                  Get started
                </CustomButton>
              </CustomLink>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CallToAction
