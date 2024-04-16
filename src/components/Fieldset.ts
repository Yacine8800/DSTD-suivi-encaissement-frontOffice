import { styled } from '@stitches/react';

export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  width: '100%',
  fontWeight: 300,

  label: {
    marginLeft: 10,
  },
});
