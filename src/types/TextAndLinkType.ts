import { ReactElement } from "react";

export type TextAndLinkType = {
  description?:  ReactElement<any, any> | string | undefined;
  routeName: string;
  route: string;
};
