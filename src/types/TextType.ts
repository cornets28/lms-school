import { ReactNode } from "react";

export type TextType = {
  fontSize?: any | undefined;
  color?: string | undefined;
  tag?: "div" | "p" | undefined;
  textAlign?: "left" | "right" | "center" | undefined;
  lineHeight?: number | undefined;
  fontWeight?: number | undefined;
  text?: ReactNode| undefined;
  variant?: string | undefined;
};
