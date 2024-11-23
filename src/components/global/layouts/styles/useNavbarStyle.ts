// import { makeStyles } from "@mui/styles";
import colors from "@/utils/theme/base/colors";
import { makeStyles } from "@mui/material";

const { grey } = colors;

export const useNavbarStyle = makeStyles(() => ({
  navBarLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  textDivider: {
    marginLeft: 4,
    marginRight: 4,
    color: grey[500],
  },
  copyButton: {
    marginLeft: "5px",
    cursor: "pointer",
    marginRight: "10px",
    filter:
      "invert(48%) sepia(100%) saturate(3661%) hue-rotate(2deg) brightness(103%) contrast(101%)",
  },
  topNavIcon: {
    width: 14,
    height: 14,
    marginTop: 5,
    marginRight: 3,
    filter:
      "invert(48%) sepia(100%) saturate(3661%) hue-rotate(2deg) brightness(103%) contrast(101%)" /* For #FF7B00 */,
  },
}));
