import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import ComponentWrapper from './ComponentWrapper';
import ComponentSkeleton from './ComponentSkeleton';

// ===============================|| SHADOW BOX ||=============================== //

interface ShadowBoxProps{
  shadow:string;
}

interface CustomShadowBoxProps{
  shadow: string,
  label: string,
  color: string,
  bgcolor?: string
};



function ShadowBox({ shadow }:ShadowBoxProps) {
  return (
    <MainCard border={false} shadow={shadow} boxShadow>
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="h6">boxShadow</Typography>
        <Typography variant="subtitle1">{shadow}</Typography>
      </Stack>
    </MainCard>
  );
}

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

function CustomShadowBox({ shadow, label, color, bgcolor }:CustomShadowBoxProps) {
  return (
    <MainCard border={false} shadow={shadow} boxShadow sx={{ bgcolor: bgcolor || 'inherit' }}>
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="subtitle1" color={color}>
          {label}
        </Typography>
      </Stack>
    </MainCard>
  );
}

// ============================|| COMPONENT - SHADOW ||============================ //

export default function ComponentShadow() {
  const theme = useTheme();

  return (
    <ComponentSkeleton>
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Basic Shadow">
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="0" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="1" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="2" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="3" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="4" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="5" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="6" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="7" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="8" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="9" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="10" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="11" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="12" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="13" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="14" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="15" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="16" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="17" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="18" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="19" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="20" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="21" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="22" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="23" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ShadowBox shadow="24" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Custom Shadow">
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox shadow={theme.shadows[0]} label="z1" color="inherit" bgcolor={''} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="Color Shadow">
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox
                    color={theme.palette.primary.contrastText}
                    bgcolor={theme.palette.primary.main}
                    shadow={theme.shadows[1]}
                    label="primary"
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox
                    color={theme.palette.secondary.contrastText}
                    bgcolor={theme.palette.secondary.main}
                    shadow={theme.shadows[2]}
                    label="secondary"
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox
                    color={theme.palette.success.contrastText}
                    bgcolor={theme.palette.success.main}
                    shadow={theme.shadows[1]}
                    label="success"
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox
                    color={theme.palette.warning.contrastText}
                    bgcolor={theme.palette.warning.main}
                    shadow={theme.shadows[1]}
                    label="warning"
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox
                    color={theme.palette.info.contrastText}
                    bgcolor={theme.palette.info.main}
                    shadow={theme.shadows[1]}
                    label="info"
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox
                    color={theme.palette.error.contrastText}
                    bgcolor={theme.palette.error.main}
                    shadow={theme.shadows[1]}
                    label="error"
                  />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox color={theme.palette.primary.main} shadow={theme.shadows[1]} label="primary" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox color={theme.palette.secondary.main} shadow={theme.shadows[1]} label="secondary" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox color={theme.palette.success.main} shadow={theme.shadows[1]} label="success" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox color={theme.palette.warning.main} shadow={theme.shadows[1]} label="warning" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox color={theme.palette.info.main} shadow={theme.shadows[1]} label="info" />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <CustomShadowBox color={theme.palette.error.main} shadow={theme.shadows[1]} label="error" bgcolor={''} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}


