export type ImageOrVideoAndButtonType = {
  currentVideoUrl?: string | undefined;
  handleAddVideoToEditor: () => void;
  onClickReplaceVideo: () => void;
  label: string;
  label2: string;
  isVideo: boolean;
  currentImageUrl?: string | undefined;
};
