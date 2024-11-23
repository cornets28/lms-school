import type { FC, ReactNode } from "react";
import { Typography, Box } from "@mui/material";

interface TabPanelProps {
  children?: ReactNode;
  index: string;
  value: string;
}

export const TabPanel: FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...rest
}) => {
  return (
    <div role="tabpanel" hidden={value !== index} {...rest}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
