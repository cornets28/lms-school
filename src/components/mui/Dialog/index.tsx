import type { FC } from "react";
import { Dialog as MuiDialog } from "@mui/material";
import type { DialogProps } from "@mui/material";

export const Dialog: FC<DialogProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiDialog {...rest}>{children}</MuiDialog>;
};
