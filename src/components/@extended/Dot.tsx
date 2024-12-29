import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project import
import getColors from 'utils/getColors';

interface DotPrpos{
  color:any, size?:number, variant?:string, sx?:any
}

export default function Dot({ color, size, variant, sx }:DotPrpos) {
  const theme = useTheme();
  const colors = getColors(theme, color || 'primary');
  const { main } = colors;

  return (
    <Box
      sx={{
        width: size || 8,
        height: size || 8,
        borderRadius: '50%',
        bgcolor: variant === 'outlined' ? '' : main,
        ...(variant === 'outlined' && { border: `1px solid ${main}` }),
        ...sx
      }}
    />
  );
}