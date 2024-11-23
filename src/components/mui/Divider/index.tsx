import type { FC } from 'react';
import { Divider as MuiDivider } from '@mui/material';
import type { DividerProps } from '@mui/material';

export const Divider: FC<DividerProps> = (props) => {
    const { ...rest } = props;

    return <MuiDivider {...rest} />;
};
