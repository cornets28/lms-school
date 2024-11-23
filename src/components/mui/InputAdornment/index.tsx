import type { FC } from 'react';
import { InputAdornment as MuiInputAdornment } from '@mui/material';
import type { InputAdornmentProps } from '@mui/material';

export const InputAdornment: FC<InputAdornmentProps> = (props) => {
    const { children, ...rest } = props;

    return <MuiInputAdornment {...rest}>{children}</MuiInputAdornment>;
};
