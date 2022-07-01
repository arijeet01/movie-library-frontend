import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {

  const handleChange = (event) => {
    props.onSelect(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Privacy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Privacy"
          onChange={handleChange}
        >
          <MenuItem value='public'>Public</MenuItem>
          <MenuItem value='private'>Private</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
