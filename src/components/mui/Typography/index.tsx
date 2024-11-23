import type { FC, ElementType } from 'react';
import MuiTypography from  "@mui/material/Typography";

import type { TypographyProps } from '@mui/material';

interface TypographyPropsCustom extends TypographyProps {
    component?: ElementType;
}

export const Typography: FC<TypographyPropsCustom> = ({ children, ...rest }) => {
    return <MuiTypography {...rest}>{children}</MuiTypography>;
};
