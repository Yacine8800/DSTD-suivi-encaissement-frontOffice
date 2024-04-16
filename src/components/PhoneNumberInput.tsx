import 'react-phone-number-input/style.css';

import React from 'react';
import type { Props } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';

import { Input } from './Input';

const DEFAULT_COUNTRY = 'CI';

function PhoneNumberInput(
  props: Props<React.ComponentProps<typeof Input>>,
  ref: any
) {
  return (
    <PhoneInput
      inputComponent={Input}
      defaultCountry={DEFAULT_COUNTRY}
      countries={['CI']}
      international={false}
      limitMaxLength
      initialValueFormat="national"
      {...props}
      ref={ref}
    />
  );
}

export default React.forwardRef(PhoneNumberInput);
