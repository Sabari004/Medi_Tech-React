import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const doctors = [
  {
    value: 'Dr.Sanjeevi',
  },
  {
    value: 'Dr.Sachin',
  },
  {
    value: 'Dr.Vinoth',
  },
  {
    value: 'Dr.Kamal',
  },
];

export default function Select() {
  const [doctor, setDoctor] = React.useState('Dr.Kamal');

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={doctor}
          onChange={handleChange}
          helperText="Choose a Doctor"
        >
          {doctors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
    </Box>
  );
}