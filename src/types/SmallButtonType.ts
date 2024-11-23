import { MouseEventHandler } from "react";

export type SmallButtonType = {
  onClick: MouseEventHandler<HTMLDivElement>;
  label: string;
  marginTop: number;
  isCentered?: true | false;
};
