import type { FC } from "react";
import { ListItemIcon as MuiListItemIcon } from "@mui/material";
import type { ListItemIconProps } from "@mui/material";

export const ListItemIcon: FC<ListItemIconProps> = ({ children, ...rest }) => {
  return <MuiListItemIcon {...rest}>{children}</MuiListItemIcon>;
};
