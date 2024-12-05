import { makeStyles } from "@mui/styles";
import colors from "@/utils/theme/base/colors";

const { skyBlue } = colors;

export const useAuthStyle = makeStyles(() => ({
  redirect: {
    cursor: "pointer",
    color: skyBlue[400],
    "&:hover": {
      color: skyBlue[600],
    },
  },
}));
