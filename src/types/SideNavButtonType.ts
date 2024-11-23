import { MouseEventHandler, ReactNode } from "react";

export type SideNavButtonType = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
  item: string;
  label: string | undefined;
};
