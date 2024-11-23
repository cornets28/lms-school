import type { ElementType, FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface ButtonCustomProps extends ButtonProps {
    to?: String;
    component?: ElementType<any> | undefined; 
}

export const Button: FC<ButtonCustomProps> = (props) => {
    const { children, ...rest } = props;

    return <MuiButton {...rest}>{children}</MuiButton>;
};
