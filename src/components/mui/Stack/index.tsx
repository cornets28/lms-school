import type { FC } from "react";
import { Stack as MuiStack } from "@mui/material";
import type { StackProps } from "@mui/material";

export const Stack: FC<StackProps> = ({ children, ...rest }) => {
  return <MuiStack {...rest}>{children}</MuiStack>;
};
