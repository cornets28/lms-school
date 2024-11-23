import { MouseEventHandler, ReactNode } from "react";

export type SimpleModalType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
};
