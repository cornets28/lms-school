import type { FC } from "react";
import { Tab as MuiTab } from "@mui/material";
import type { TabProps } from "@mui/material";

export const Tab: FC<TabProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiTab {...rest}>{children}</MuiTab>;
};
