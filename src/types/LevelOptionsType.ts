import { MouseEventHandler } from "react";

export type LevelOptionsType = {
  level: string;
  icon: string;
  onLevelSelection: MouseEventHandler<HTMLDivElement>;
  bgColor?: string;
};
