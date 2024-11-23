import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
  className?: string;
  container?: string; 
};

const BackdropGradient = ({ children, className = "", container = "" }: Props) => {
  return (
    <Box
      className={container}
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className={className}
        sx={{
          position: "absolute",
          borderRadius: "50%",
          mx: 10,
          zIndex: -1,
          backgroundImage: "radial-gradient(circle, #00000010, transparent)",
        }}
      />
      {children}
    </Box>
  );
};

export default BackdropGradient;
