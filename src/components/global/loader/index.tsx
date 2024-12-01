import React from "react";
import { CircularProgress, Box } from "@mui/material";

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Loader = ({ loading, children, className }: LoaderProps) => {
  return loading ? (
    <Box
      className={className}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <CircularProgress
        size={40} 
        sx={{
          color: "yellow", 
          animationDuration: "1.4s",
        }}
      />
    </Box>
  ) : (
    <>{children}</>
  );
};
