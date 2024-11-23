import { MouseEventHandler } from "react";

export type SimpleButtonType = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
