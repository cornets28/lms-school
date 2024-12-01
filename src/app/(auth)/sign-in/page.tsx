import React from "react"
import SignInForm from "@/components/forms/SignIn"
import { GoogleAuthButton } from "@/components/global/googleOauthButton"

import colors from "@/utils/theme/base/colors"
import Text from "@/components/global/paragraph/Text"
import typography from "@/utils/theme/base/typography"
import { Box } from "@/components/mui/Box"
import { Divider } from "@/components/mui/Divider"


const SignInPage = () => {
  const { grey, white } = colors
  const { size } = typography

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Text
        fontSize={size.lg}
        color={grey[900]}
        tag="p"
        textAlign="left"
        lineHeight={2}
        fontWeight={900}
        text="Login"
      />

      <Text
        fontSize={size.sm}
        color={grey[900]}
        tag="p"
        textAlign="left"
        fontWeight={300}
        text="Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself."
      />
      <SignInForm />
      <Box sx={{ position: "relative", my: 3 }}>
        <Divider sx={{ bgcolor: grey[500] }} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: white.main,
            px: 2,
            py: 0.5,
            fontSize: 12,
            color: grey[600],
          }}
        >
          OR CONTINUE WITH
        </Box>
      </Box>
      <GoogleAuthButton method="signin" />
    </Box>
  )
}

export default SignInPage
