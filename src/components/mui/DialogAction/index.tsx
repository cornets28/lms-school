import type { FC } from "react";
import { DialogActions as MuiDialogActions } from "@mui/material";
import type { DialogActionsProps } from "@mui/material";

export const DialogActions: FC<DialogActionsProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiDialogActions {...rest}>{children}</MuiDialogActions>;
};
