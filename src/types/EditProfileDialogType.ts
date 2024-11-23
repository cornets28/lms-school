import { FormEventHandler, MouseEventHandler } from "react";

export type EditProfileDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onSubmit: FormEventHandler<HTMLDivElement>;
};
