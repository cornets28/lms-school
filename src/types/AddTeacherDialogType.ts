import { FormEventHandler, MouseEventHandler } from "react";

export type AddTeacherDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onSubmit: FormEventHandler<HTMLDivElement>;
};