"use client"

import React from "react"
import { Box, CircularProgress } from "@mui/material"
import { FormGenerator } from "@/components/global/FormGenerator"
import { SCHOOL_CONSTANTS } from "@/constants"
import { useAuthSignIn } from "@/hooks/authentication"
import CustomButton from "@/components/buttons/CustomButton"
import colors from "@/utils/theme/base/colors"
import TextAndLink from "@/components/global/TextAndLink"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"

const SignInForm = () => {
  const query = new QueryClient()
  const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn()
  const { grey, purple, yellow } = colors

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <Box
        component="form"
        onSubmit={onAuthenticateUser}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
      >
        {SCHOOL_CONSTANTS.signInForm.map((field: any) => (
          <Box mt={-3} key={field.id}>
            <FormGenerator
              {...field}
              key={field.id}
              register={register}
              errors={errors}
            />
          </Box>
        ))}

        <TextAndLink
          description="Forgot your"
          routeName="password?"
          route="/sign-up"
        />

        <CustomButton
          type="submit"
          borderColorHover={purple[800]}
          bgColorHover={purple[800]}
          labelColorHover={grey[100]}
          variant="outlined"
          bgColor={purple[700]}
          labelColor={grey[100]}
          borderColor={purple[700]}
          isDisabled={isPending}
        >
          {isPending ? (
            <CircularProgress size={20} sx={{ color: yellow[900], mb: -.5 }} />
          ) : (
            "Sign In with Email"
          )}
        </CustomButton>
        <Box mt={2}>
          <TextAndLink
            description="Don't have an account?"
            routeName="Anrejitre"
            route="/sign-up"
          />
        </Box>
      </Box>
    </HydrationBoundary>
  )
}

export default SignInForm
