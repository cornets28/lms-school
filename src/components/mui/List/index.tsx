import type { FC } from "react";
import { List as MuiList } from "@mui/material";
import type { ListProps } from "@mui/material";

export const List: FC<ListProps> = ({ children, ...rest }) => {
  return <MuiList {...rest}>{children}</MuiList>;
};
