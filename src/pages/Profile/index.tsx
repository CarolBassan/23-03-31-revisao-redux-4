import {
  Box, Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { saveProfile } from '../../store/modules/profile/profileSlice';
import { TProfile } from './types';

const alignCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export function Profile() {
  // const [profile, setProfile] = useState<TProfile>({} as TProfile);
  const profile = useAppSelector((state) => state.profile.value);
  const dispatch = useAppDispatch();

  const [isShow, setIsShow] = useState(false);

  const handleChangeProfile = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(saveProfile({ ...profile, [e.target.name]: e.target.value }));

    setIsShow(false);
  };

  const handleSelectGender = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(saveProfile({ ...profile, gender: e.target.value }));

    setIsShow(false);
  };

  return (
    <Grid
      container
      sx={{ ...alignCenter, marginTop: '2rem' }}
    >
      <Paper sx={{
        minWidth: '300px',
        padding: '1rem',
      }}
      >
        <Box>
          <Typography variant="h4" align="center">
            Profile
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            marginTop: 2,

            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          noValidate
          autoComplete="off"

        >
          <TextField
            id="outlined-name"
            name="name"
            label="Name"
            type="text"
            value={profile.name || ''}
            onChange={handleChangeProfile}
          />

          <TextField
            id="outlined-age-input"
            label="Age"
            name="age"
            type="number"
            value={profile.age || ''}
            onChange={handleChangeProfile}
          />

          <RadioGroup
            name="radio-buttons-group"
            sx={{ display: 'inline' }}
            onChange={handleSelectGender}
            value={profile.gender || 'female'}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <Button variant="contained" onClick={() => setIsShow((prev) => !prev)}>
            Exibir
          </Button>
        </Box>
      </Paper>

      <Grid item sx={{ marginTop: 4 }}>
        { isShow ? (
          <Paper sx={{ padding: '1rem' }} elevation={2}>
            <Typography variant="h4" align="center">
              Exibindo
            </Typography>
            <Typography variant="h5" align="center">
              {profile.name}
            </Typography>
            <Typography variant="h5" align="center">
              {profile.age}
            </Typography>
            <Typography variant="h5" align="center">
              {profile.gender}
            </Typography>
          </Paper>
        ) : (null)}
      </Grid>
    </Grid>
  );
}
