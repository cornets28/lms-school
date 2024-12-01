"use client"

import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useGoogleAuth } from "@/hooks/authentication";
import CustomButton from "@/components/buttons/CustomButton";
import colors from "@/utils/theme/base/colors";
import Image from "next/image";
import { GoogleIcon } from "@/assets";
import { GoogleAuthButtonTypes } from "@/types/GoogleAuthButtonTypes";

export const GoogleAuthButton = ({ method }: GoogleAuthButtonTypes) => {
  const { signUpWith, signInWith } = useGoogleAuth();
  const { grey, skyBlue } = colors;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (method === "signin") {
        await signInWith("oauth_google");
      } else {
        await signUpWith("oauth_google");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomButton
      onClick={handleClick}
      bgColorHover={grey[300]}
      variant="outlined"
      bgColor={grey[200]}
      labelColor={skyBlue[400]}
      borderColor={skyBlue[300]}
      type="submit"
      isDisabled={loading}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <>
          <Image
            src={GoogleIcon}
            alt="google icon"
            width={17}
            height={17}
            priority
            style={{ marginBottom: -4, marginRight: 8 }}
          />
          <span>Anrejitre ak Google</span>
        </>
      )}
    </CustomButton>
  );
};

export default GoogleAuthButton;
