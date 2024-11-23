import { MouseEventHandler } from "react";

export type CustomMenuItemType = {
  key?: number | undefined;
  onClick: MouseEventHandler<HTMLLIElement>;
  label?: string | undefined;
  path?: string | undefined;
  icon?: string;
};
