import type { FC } from "react";
import { MenuItem as MuiMenuItem } from "@mui/material";
import type { MenuItemProps } from "@mui/material";

export const MenuItem: FC<MenuItemProps> = ({ children, ...rest }) => {
  return <MuiMenuItem {...rest}>{children}</MuiMenuItem>;
};
