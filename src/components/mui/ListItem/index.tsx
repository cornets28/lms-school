import type { FC } from "react";
import { ListItem as MuiListItem } from "@mui/material";
import type { ListItemProps } from "@mui/material";

export const ListItem: FC<ListItemProps> = ({ children, ...rest }) => {
  return <MuiListItem {...rest}>{children}</MuiListItem>;
};
