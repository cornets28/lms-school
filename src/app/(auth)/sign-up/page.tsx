import React from 'react';
import { GoogleAuthButton } from "@/components/global/googleOauthButton"

import colors from "@/utils/theme/base/colors"
import Text from "@/components/global/paragraph/Text"
import typography from "@/utils/theme/base/typography"
import { Box } from "@/components/mui/Box"
import SignUpForm from '@/components/forms/SignUp';
import OrContinueWith from '@/components/ui/orContinueWith';


const SignUpPage = () => {
  const { grey } = colors
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
        text="Register"
      />
      <Text
        fontSize={size.sm}
        color={grey[900]}
        tag="p"
        textAlign="left"
        fontWeight={300}
        text="Network with people from around the world, join our platform, create your own,
        watch courses and become the best version of yourself."
      />
      <SignUpForm />
      <OrContinueWith text="OR CONTINUE WITH" />
      <GoogleAuthButton method="signup" />
    </Box>
  );
};

export default SignUpPage;
