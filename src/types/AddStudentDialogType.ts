import { FormEventHandler, MouseEventHandler } from "react";

export type AddStudentDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onSubmit: FormEventHandler<HTMLDivElement>;
};
