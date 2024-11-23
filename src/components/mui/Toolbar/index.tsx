import type { FC } from "react";
import { Toolbar as MuiToolbar } from "@mui/material";
import type { ToolbarProps } from "@mui/material";

export const Toolbar: FC<ToolbarProps> = ({ children, ...rest }) => {
  return <MuiToolbar {...rest}>{children}</MuiToolbar>;
};
