import type { FC } from "react";
import { ListItemButton as MuiListItemButton } from "@mui/material";
import type { ListItemButtonProps } from "@mui/material";

export const ListItemButton: FC<ListItemButtonProps> = ({
  children,
  ...rest
}) => {
  return <MuiListItemButton {...rest}>{children}</MuiListItemButton>;
};
