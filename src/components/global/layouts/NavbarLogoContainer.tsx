import { Box } from "@/components/mui/Box";
import { FC } from "react";
import { NavbarLogoContainerType } from "@/types/NavbarLogoContainerType";

const NavbarLogoContainer: FC<NavbarLogoContainerType> = ({
  children,
  onClick,
  width,
  height,
  display,
}) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        cursor: "pointer",
        display: display,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default NavbarLogoContainer;
