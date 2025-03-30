import { Slider, Typography, Box } from '@mui/material';

export function LikesControl({ value, onChange }) {
  return (
    <Box>
      <Typography gutterBottom>
        Avg. Likes: {value.toFixed(1)}
      </Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => onChange(newValue)}
        min={0}
        max={10}
        step={0.1}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}