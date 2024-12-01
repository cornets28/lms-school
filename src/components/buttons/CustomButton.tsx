import { FC } from "react"
import { Button } from "@/components/mui/Button"
import { CustomButtonType } from "@/types/CustomButtonType"
import colors from "@/utils/theme/base/colors"

const CustomButton: FC<CustomButtonType> = ({
  children,
  bgColor,
  bgColorHover,
  isDisabled,
  variant,
  labelColor = "info",
  borderColor,
  labelColorHover,
  borderColorHover,
  onClick,
  type
}) => {
  const { grey } = colors
  return (
    <Button
      type={type}
      fullWidth
      disabled={isDisabled}
      variant={variant}
      onClick={onClick}
      sx={{
        marginTop: 1,
        color: labelColor,
        bgcolor: isDisabled ? grey[400] : bgColor,
        borderRadius: 4,
        textTransform: "unset",
        borderColor: borderColor,
        "&:hover": {
          bgcolor: bgColorHover,
          borderColor: borderColorHover,
        },
        "&:hover span": {
          color: labelColorHover,
        },
      }}
    >
      <span>{children}</span>
    </Button>
  )
}

export default CustomButton