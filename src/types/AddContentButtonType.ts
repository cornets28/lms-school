import { MouseEventHandler } from "react";

export type AddContentButtonType = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
};
