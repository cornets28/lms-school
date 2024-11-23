import { FormEvent, MouseEventHandler } from "react";

export type CreateCourseDialogType = {
  open: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  onSubmit: any;
  courseClassName: string;
  courseLevel: string
};
