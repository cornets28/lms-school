import { Ref } from "react";

export type InputFieldType = {
  type: "text" | "number" | "password";
  placeholder: string;
  name: string;
  value: string;
  error: any;
  helperText?: string | undefined | boolean ;
  rows?: number | undefined;
  multiline?: boolean | undefined;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  inputRef?: Ref<any> | undefined;
};
