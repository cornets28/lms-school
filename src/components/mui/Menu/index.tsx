import type { FC } from "react";
import { Menu as MuiMenu } from "@mui/material";
import type { MenuProps } from "@mui/material";

export const Menu: FC<MenuProps> = ({ children, ...rest }) => {
  return <MuiMenu {...rest}>{children}</MuiMenu>;
};
