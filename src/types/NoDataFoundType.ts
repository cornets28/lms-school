import { MouseEventHandler } from "react";

export type NoDataFoundType = {
  info: string;
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};
