import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Dropdown() {
  const [publicc, setPublic] = React.useState(false);

  const handleChange = (event) => {
    setPublic(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Public</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={publicc}
          label="Public"
          onChange={handleChange}
        >
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
