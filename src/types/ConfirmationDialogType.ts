import { MouseEventHandler } from "react";

export type ConfirmationDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  header: string;
  onCloseConfirmation: MouseEventHandler<HTMLDivElement>;
  cancelLabel: string;
  continueLabel: string;
  width: string;
  height: string;
  info: string;
};
