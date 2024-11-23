import { MouseEventHandler } from "react";

export type ProfileImageType = {
  alt: string;
  image: string;
  onClickEdit:  MouseEventHandler<HTMLButtonElement>;
};
