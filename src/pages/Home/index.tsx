import {
  Box, Button, Grid, Paper, Typography,
} from '@mui/material';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clear, decrementar, incrementar } from '../../store/modules/counter/counterSlice';

export function Home() {
  const counter = useAppSelector((states) => states.counter.value);
  const step = 1;

  const dispatch = useAppDispatch();

  const handleDecrease = () => { dispatch(decrementar(step)); };
  const handleIncrease = () => { dispatch(incrementar(step)); };
  const handleReset = () => { dispatch(clear()); };

  const alignCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Grid container sx={alignCenter}>
      <Grid item width="100%" paddingTop="2rem" sx={alignCenter}>
        <Paper sx={{
          gap: '1rem',
          alignItems: 'flex-start',
        }}
        >
          <Typography variant="h3" alignSelf="center">
            Template React + Material UI
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: '1rem',
          }}
          >

            <Button onClick={handleDecrease /* decrease */} variant="contained" color="primary">-{step}</Button>
            <Typography variant="h5" alignSelf="center">{ counter }</Typography>
            <Button onClick={handleIncrease /* increase */} variant="contained" color="primary">+{step}</Button>
            <Button onClick={handleReset /* reset */} variant="contained" color="primary">reset</Button>
          </Box>

        </Paper>
      </Grid>
    </Grid>
  );
}
