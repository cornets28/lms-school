import React from 'react';
import { Typography } from '@mui/material';
import { GradientTextTypes } from '@/types/GradientTextTypes';

const useGradientTextStyle = (startColor: string, midColor: string, endColor: string) => {
  return React.useMemo(() => ({
    background: `linear-gradient(to right, ${startColor} 0%, ${midColor} 50%, ${endColor} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent', // Fallback for browsers that don't support background-clip: text
    display: 'inline-block', // Ensures the gradient applies only to the text content
  }), [startColor, midColor, endColor]);
};

const GradientText: React.FC<GradientTextTypes> = ({ 
  startColor = '#000000',
  midColor = '#FFFFFF',
  endColor = '#000000',
  children, 
  style,
  ...props 
}) => {
  const gradientStyle = useGradientTextStyle(startColor, midColor, endColor);

  return (
    <Typography
      style={{
        ...gradientStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default GradientText;


