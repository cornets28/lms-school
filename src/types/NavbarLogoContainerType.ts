import { MouseEventHandler, ReactNode } from "react";

export type NavbarLogoContainerType = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
  width: number,
  height: number,
  display: string
};
