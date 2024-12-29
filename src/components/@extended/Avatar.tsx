import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme,Theme } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';

// project import
import getColors from 'utils/getColors';
import { ReactNode } from 'react';

// Define the types for props
interface ColorStyleProps {
  theme: Theme;
  color: string;
  type?: 'filled' | 'outlined' | 'combined' | 'default';
}

interface AvatarProps {
  children?: ReactNode;
  color?: string;
  type?: 'filled' | 'outlined' | 'combined' | 'default';
  size?: 'badge' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  [key: string]: any;
}

function getColorStyle({ theme, color, type = 'default' }: ColorStyleProps) {
  const colors = getColors(theme, color);
  const { lighter, light, main, contrastText } = colors;

  switch (type) {
    case 'filled':
      return {
        color: contrastText,
        background: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        background: 'transparent'
      };
    case 'combined':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        background: lighter
      };
    default:
      return {
        color: main,
        background: lighter
      };
  }
}

// ==============================|| AVATAR - SIZE STYLE ||============================== //

function getSizeStyle(size: AvatarProps['size']) {
  switch (size) {
    case 'badge':
      return {
        border: '2px solid',
        fontSize: '0.675rem',
        width: 20,
        height: 20
      };
    case 'xs':
      return {
        fontSize: '0.75rem',
        width: 24,
        height: 24
      };
    case 'sm':
      return {
        fontSize: '0.875rem',
        width: 32,
        height: 32
      };
    case 'lg':
      return {
        fontSize: '1.2rem',
        width: 52,
        height: 52
      };
    case 'xl':
      return {
        fontSize: '1.5rem',
        width: 64,
        height: 64
      };
    case 'md':
    default:
      return {
        fontSize: '1rem',
        width: 40,
        height: 40
      };
  }
}

const AvatarStyle = styled(MuiAvatar, { shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size' })(
  ({ theme, color, type, size }) => ({
    ...getSizeStyle(size),
    ...getColorStyle({ theme, color, type }),
    ...(size === 'badge' && {
      borderColor: theme.palette.background.default
    })
  })
);

const Avatar: React.FC<AvatarProps> = ({ children, color = 'primary', type, size = 'md', ...others }) => {
  const theme = useTheme();

  return (
    <AvatarStyle theme={theme} color={color} type={type} size={size} {...others}>
      {children}
    </AvatarStyle>
  );
}

export default Avatar;