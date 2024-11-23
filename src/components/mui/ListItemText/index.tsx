import type { FC } from "react";
import { ListItemText as MuiListItemText } from "@mui/material";
import type { ListItemTextProps } from "@mui/material";

export const ListItemText: FC<ListItemTextProps> = ({ children, ...rest }) => {
  return <MuiListItemText {...rest}>{children}</MuiListItemText>;
};
