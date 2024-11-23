export type ShowCourseContentType = {
    textFieldPlaceholder: string;
    onchangeEditor?: (data: string) => void;
    keyChange?: string;
    defaultValue?: string;
    placeholder?: string;
    onBlurEditor?: (event: any, editor: any) => void;
    id?: string;
    onSubmitData: any;
  };