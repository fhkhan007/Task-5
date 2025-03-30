import { Stack } from '@mui/material';
import { LocaleSelector } from './LocaleSelector';
import { SeedControl } from './SeedControl';
import { LikesControl } from './LikesControl';
import { ReviewsControl } from './ReviewsControl';
import { ExportButton } from './ExportButton';

export function Controls({
  locale,
  setLocale,
  seed,
  setSeed,
  avgLikes,
  setAvgLikes,
  avgReviews,
  setAvgReviews,
  books
}) {
  return (
    <Stack spacing={3} sx={{ mb: 3 }}>
      <LocaleSelector value={locale} onChange={setLocale} />
      <SeedControl value={seed} onChange={setSeed} />
      <LikesControl value={avgLikes} onChange={setAvgLikes} />
      <ReviewsControl value={avgReviews} onChange={setAvgReviews} />
      <ExportButton books={books} />
    </Stack>
  );
}