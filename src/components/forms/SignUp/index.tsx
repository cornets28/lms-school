"use client";

import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAuthSignUp } from "@/hooks/authentication";
import dynamic from "next/dynamic";
import { SCHOOL_CONSTANTS } from "@/constants";
import { FormGenerator } from "@/components/global/FormGenerator";
import TextAndLink from "@/components/global/TextAndLink";
import CustomButton from "@/components/buttons/CustomButton";
import colors from "@/utils/theme/base/colors";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const OtpInput = dynamic(
  () =>
    import("@/components/global/otpInput").then(
      (component) => component.default,
    ),
  { ssr: false },
);

const SignUpForm = () => {
  const query = new QueryClient();
  const {
    register,
    errors,
    verifying,
    creating,
    onGenerateCode,
    onInitiateUserRegistration,
    code,
    setCode,
    getValues,
  } = useAuthSignUp();
  const { grey, purple, yellow } = colors;

  // Loading state for code generation
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);

  const handleGenerateCode = async () => {
    const email = getValues("email");
    const password = getValues("password");

    if (!email || !password) {
      alert("Please fill in your email and password.");
      return;
    }

    setIsGeneratingCode(true);
    try {
      await onGenerateCode(email, password);
    } catch (error) {
      console.error("Error generating code:", error);
    } finally {
      setIsGeneratingCode(false);
    }
  };

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <Box
        component="form"
        onSubmit={onInitiateUserRegistration}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 3,
        }}
      >
        {verifying ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 1,
            }}
          >
            <OtpInput otp={code} setOtp={setCode} />
          </Box>
        ) : (
          SCHOOL_CONSTANTS.signUpForm.map((field: any) => (
            <Box mt={-4} key={field.id}>
              <FormGenerator
                {...field}
                key={field.id}
                register={register}
                errors={errors}
                // @ts-ignore
                helperText={errors[field.id]?.message || ""}
              />
            </Box>
          ))
        )}

        {verifying ? (
          <CustomButton
            type="submit"
            borderColorHover={purple[800]}
            bgColorHover={purple[800]}
            labelColorHover={grey[100]}
            variant="outlined"
            bgColor={purple[700]}
            labelColor={grey[100]}
            borderColor={purple[700]}
            isDisabled={creating}
          >
            {creating ? (
              <CircularProgress size={20} sx={{ color: yellow[900], mb: -.5 }} />
            ) : (
              "Sign Up with Email"
            )}
          </CustomButton>
        ) : (
          <Box mt={-1}>
            <CustomButton
              borderColorHover={purple[800]}
              bgColorHover={purple[800]}
              labelColorHover={grey[100]}
              variant="outlined"
              bgColor={purple[700]}
              labelColor={grey[100]}
              borderColor={purple[700]}
              onClick={handleGenerateCode}
              isDisabled={isGeneratingCode}
            >
              {isGeneratingCode ? (
                <CircularProgress size={20} sx={{ color: yellow[900], mb: -.5 }} />
              ) : (
                "Generate Code"
              )}
            </CustomButton>
            <Box mt={4}>
              <TextAndLink
                description="Already have an account?"
                routeName="Antre"
                route="/sign-in"
              />
            </Box>
          </Box>
        )}
      </Box>
    </HydrationBoundary>
  );
};

export default SignUpForm;
