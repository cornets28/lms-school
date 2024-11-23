import { MouseEventHandler, ReactNode } from "react";

export type DisplayContentType = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
//   isTextEditing: boolean;
};
