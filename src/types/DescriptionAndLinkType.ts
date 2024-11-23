import { MouseEventHandler, ReactElement } from "react";

export type DescriptionAndLinkType = {
  description?:  ReactElement<any, any> | string | undefined;
  routeName: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};
