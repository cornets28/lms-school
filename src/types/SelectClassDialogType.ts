import { MouseEventHandler } from "react";

export type SelectClassDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onClassSelection: MouseEventHandler<HTMLDivElement>;
  onContinue:  MouseEventHandler<HTMLDivElement>;
};
