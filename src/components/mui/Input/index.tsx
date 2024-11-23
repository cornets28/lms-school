import type { FC } from 'react';
import { Input as MuiInput } from '@mui/material';
import type { InputProps } from '@mui/material';

export const Input: FC<InputProps> = ({ 
    // @ts-ignore
    children, ...rest }) => {
    return <MuiInput {...rest}>{children}</MuiInput>;
};
