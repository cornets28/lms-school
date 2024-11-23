import { MouseEventHandler, ReactNode } from "react";

export type CustomDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onContinue: MouseEventHandler<HTMLDivElement>
  children: ReactNode;
  header: string;
  continueLabel: string;
  cancelLabel: string;
  width: string;
  height: string;
  isButtonDisabled?: boolean;
};
