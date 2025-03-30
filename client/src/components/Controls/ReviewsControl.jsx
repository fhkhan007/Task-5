import { TextField } from '@mui/material';

export function ReviewsControl({ value, onChange }) {
  return (
    <TextField
      label="Avg. Reviews"
      type="number"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      inputProps={{ min: 0, step: 0.1 }}
      fullWidth
    />
  );
}