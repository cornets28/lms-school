import type { FC } from "react";
import { Tooltip as MuiTooltip } from "@mui/material";
import type { TooltipProps } from "@mui/material";

export const Tooltip: FC<TooltipProps> = ({ children, ...rest }) => {
  return <MuiTooltip {...rest}>{children}</MuiTooltip>;
};
