import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

// project import
import Logo from './LogoMain';
import config from 'config';

// ==============================|| MAIN LOGO ||============================== //

interface LogoSectionProps {
  sx?: any,
  to?: string,
  isIcon?:boolean
};
const LogoSection = ({ sx, to }:LogoSectionProps) => {
  return (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Chip
          label={config.version}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
        />
      </Stack>
    </ButtonBase>
  );
};

export default LogoSection;
