import { styled } from '@stitches/react';

export const Label = styled('label', {
  color: 'var(--color-gray-24)',
  textAlign: 'start',
  fontSize: '0.875rem',
  fontWeight: 300,
  '&::placeholder': {
    fontSize: '0.875rem',
    fontWeight: 300,
    color: 'red',
  },
});
