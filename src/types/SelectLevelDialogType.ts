import { MouseEventHandler } from "react";

export type SelectLevelDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onLevelSelection: MouseEventHandler<HTMLDivElement>;
  onContinue: MouseEventHandler<HTMLDivElement>;
};
