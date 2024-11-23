import React from 'react';
import { Link as MuiLink} from '@mui/material';
import NextLink from 'next/link';
import { CustomLinkType } from '@/types/CustomLinkType';

const CustomLink: React.FC<CustomLinkType> = ({ href, noUnderline = true, ...props }) => {
  return (
    <MuiLink
      component={NextLink}
      href={href}
      underline={noUnderline ? 'none' : 'hover'}
      {...props}
    />
  );
};

export default CustomLink;