import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export function LocaleSelector({ value, onChange }) {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/locales')
      .then(res => setLocales(Object.entries(res.data)))
      .catch(console.error);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>Language/Region</InputLabel>
      <Select
        value={value}
        label="Language/Region"
        onChange={(e) => onChange(e.target.value)}
      >
        {locales.map(([code, name]) => (
          <MenuItem key={code} value={code}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}