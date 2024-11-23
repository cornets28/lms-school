import { Typography } from "@/components/mui/Typography";
import { FC } from "react";
import { TextType } from "@/types/TextType";

const Text: FC<TextType> = ({
  fontSize,
  color,
  tag,
  textAlign,
  lineHeight,
  fontWeight,
  text
}) => {
  return (
    <Typography
      fontSize={fontSize}
      color={color}
      component={tag}
      textAlign={textAlign}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  );
};

export default Text;
