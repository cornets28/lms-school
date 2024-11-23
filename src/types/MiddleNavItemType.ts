import { MouseEventHandler } from "react";

export type MiddleNavItemType = {
  label: string | undefined;
  path: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};
