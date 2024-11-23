import type { FC } from 'react';
import { ImageList as MuiImageList } from '@mui/material';
import type { ImageListProps } from '@mui/material';

export const ImageList: FC<ImageListProps> = (props) => {
    const { children, ...rest } = props;

    return <MuiImageList {...rest}>{children}</MuiImageList>;
};
