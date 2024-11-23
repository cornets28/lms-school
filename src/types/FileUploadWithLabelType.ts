export type FileUploadWithLabelType = {
  label: string;
  name: string;
  placeholder: string;
  helperText: string | undefined;
  onChangeImage: (image: any, thumbnail: any) => void;
  imageError: boolean | undefined;
  mediaUrl: string;
};
