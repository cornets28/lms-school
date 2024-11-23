import { MouseEventHandler } from "react";

export type ClassTabType = {
  classGivenName: string;
  classNumber: number;
  onClick: MouseEventHandler<HTMLDivElement>
  bgColor: string;
  labelColor: string;
};
