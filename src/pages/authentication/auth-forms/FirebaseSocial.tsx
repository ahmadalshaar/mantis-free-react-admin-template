import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

export default function FirebaseSocial() {
  const downSM = useMediaQuery((theme:any) => theme.breakpoints.down('sm'));

  // @ts-ignore
  const googleHandler = async () => {
    // login || singup
  };

  const twitterHandler = async () => {
    // login || singup
  };

  const facebookHandler = async () => {
    // login || singup
  };

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      justifyContent={{ xs: 'space-around', sm: 'space-between' }}
      sx={{ '& .MuiButton-startIcon': { mr: { xs: 0, sm: 1 }, ml: { xs: 0, sm: -0.5 } } }}
    >
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}        
        onClick={googleHandler}
      >
        {!downSM && 'Google'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}        
        onClick={twitterHandler}
      >
        {!downSM && 'Twitter'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}        
        onClick={facebookHandler}
      >
        {!downSM && 'Facebook'}
      </Button>
    </Stack>
  );
}
