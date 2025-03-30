import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Cached as RefreshIcon } from '@mui/icons-material';

export function SeedControl({ value, onChange }) {
  const randomizeSeed = () => {
    onChange(Math.floor(Math.random() * 1000000).toString());
  };

  return (
    <TextField
      label="Seed"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={randomizeSeed}>
              <RefreshIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}