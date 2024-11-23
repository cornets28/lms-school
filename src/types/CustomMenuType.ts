import { ReactNode } from "react";

export type CustomMenuType = {
  anchorEl: null | HTMLElement;
  vertical: "bottom" | "top";
  horizontal: "left" | "right";
  open: null | HTMLElement;
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
  children: ReactNode;
  vertical2: "bottom" | "top";
  horizontal2: "left" | "right";
  display?: object;
  marginTop: number
  path?: any
};
