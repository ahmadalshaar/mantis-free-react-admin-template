// project import
import getColors from 'utils/getColors';

// ==============================|| CHIP - COLORS ||============================== //

function getColor({ color, theme }:any) {
  const colors = getColors(theme, color);
  const { dark } = colors;

  return {
    '&.Mui-focusVisible': {
      outline: `2px solid ${dark}`,
      outlineOffset: 2
    }
  };
}

function getColorStyle({ color, theme }:any) {
  const colors = getColors(theme, color);
  const { light, lighter, main } = colors;

  return {
    color: main,
    backgroundColor: lighter,
    borderColor: light,
    '& .MuiChip-deleteIcon': {
      color: main,
      '&:hover': {
        color: light
      }
    }
  };
}

// ==============================|| OVERRIDES - CHIP ||============================== //

export default function Chip(theme:any) {
  const defaultLightChip = getColorStyle({ color: 'secondary', theme });
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&:active': {
            boxShadow: 'none'
          },
          '&.MuiChip-colorPrimary': getColor({ color: 'primary', theme }),
          '&.MuiChip-colorSecondary': getColor({ color: 'secondary', theme }),
          '&.MuiChip-colorError': getColor({ color: 'error', theme }),
          '&.MuiChip-colorInfo': getColor({ color: 'info', theme }),
          '&.MuiChip-colorSuccess': getColor({ color: 'success', theme }),
          '&.MuiChip-colorWarning': getColor({ color: 'warning', theme })
        },
        sizeLarge: {
          fontSize: '1rem',
          height: 40
        },
        light: {
          ...defaultLightChip,
          '&.MuiChip-lightPrimary': getColorStyle({ color: 'primary', theme }),
          '&.MuiChip-lightSecondary': getColorStyle({ color: 'secondary', theme }),
          '&.MuiChip-lightError': getColorStyle({ color: 'error', theme }),
          '&.MuiChip-lightInfo': getColorStyle({ color: 'info', theme }),
          '&.MuiChip-lightSuccess': getColorStyle({ color: 'success', theme }),
          '&.MuiChip-lightWarning': getColorStyle({ color: 'warning', theme })
        },
        outlined: {
          border: '1px solid',
          ...defaultLightChip,
          '&.MuiChip-outlinedPrimary': getColorStyle({ color: 'primary', theme }),
          '&.MuiChip-outlinedSecondary': getColorStyle({ color: 'secondary', theme }),
          '&.MuiChip-outlinedError': getColorStyle({ color: 'error', theme }),
          '&.MuiChip-outlinedInfo': getColorStyle({ color: 'info', theme }),
          '&.MuiChip-outlinedSuccess': getColorStyle({ color: 'success', theme }),
          '&.MuiChip-outlinedWarning': getColorStyle({ color: 'warning', theme })
        }
      }
    }
  };
}