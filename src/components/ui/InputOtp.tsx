"use client";

import React, { useContext, forwardRef } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { Box, Typography } from "@mui/material";

// Custom MUI-based InputOTP component
const InputOTP = forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={containerClassName}
    className={className}
    {...props}
    style={{
      display: "flex",
      gap: "8px",
      opacity: props.disabled ? 0.5 : 1,
    }}
  />
));
InputOTP.displayName = "InputOTP";

// InputOTSchool using MUI's Box component
const InputOTSchool = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <Box
    ref={ref}
    className={className}
    sx={{
      display: "flex",
      alignItems: "center",
    }}
    {...props}
  />
));
InputOTSchool.displayName = "InputOTSchool";

const InputOTPSlot = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <Box
      ref={ref}
      className={className}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        border: 1,
        borderColor: isActive ? "primary.main" : "grey.300",
        borderRadius: index === 0 ? "4px 0 0 4px" : index === inputOTPContext.slots.length - 1 ? "0 4px 4px 0" : 0,
        transition: "all 0.3s",
        "&:focus-within": {
          boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
        },
      }}
      {...props}
    >
      <Typography variant="body1">{char}</Typography>
      {hasFakeCaret && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::after": {
              content: '""',
              height: 16,
              width: 1,
              backgroundColor: "currentColor",
              animation: "caret-blink 1s steps(1) infinite",
            },
          }}
        />
      )}
    </Box>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

// InputOTPSeparator using MUI's Box
const InputOTPSeparator = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <Box
    ref={ref}
    role="separator"
    {...props}
    sx={{
      display: "flex",
      alignItems: "center",
      mx: 1,
    }}
  >
    <Dot />
  </Box>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTSchool, InputOTPSlot, InputOTPSeparator };
