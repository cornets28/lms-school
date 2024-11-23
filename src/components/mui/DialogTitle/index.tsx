import type { FC } from "react";
import { DialogTitle as MuiDialogTitle } from "@mui/material";
import type { DialogTitleProps } from "@mui/material";

export const DialogTitle: FC<DialogTitleProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiDialogTitle {...rest}>{children}</MuiDialogTitle>;
};
