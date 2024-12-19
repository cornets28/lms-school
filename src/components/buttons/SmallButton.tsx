import { Box } from "components/mui/Box";
import { FC } from "react";
import { SmallButtonType } from "types/SmallButtonType";
import Text from "components/paragraph/Text";
import colors from "utils/theme/base/colors";
import typography from "utils/theme/base/typography";

const SmallButton: FC<SmallButtonType> = ({ onClick, label, marginTop, isCentered=false }) => {
  const { grey, yellow, purple } = colors;
  const { size } = typography;

  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: yellow[800],
        marginTop: marginTop,
        position: "absolute",
        px: 1,
        width: 'auto',
        height: 20,
        right: {xs: isCentered ? 150 : 35, sm: 35 },
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        justifyContent: "space-around",
        "&:hover": {
          bgcolor: purple[200],
          cursor: "pointer",
        },
      }}
    >
      <Text
        fontSize={size.xxs}
        color={grey[100]}
        tag="p"
        textAlign="center"
        lineHeight={2}
        fontWeight={800}
        text={label}
      />
    </Box>
  );
};

export default SmallButton;
