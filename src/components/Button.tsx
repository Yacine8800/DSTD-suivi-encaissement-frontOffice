import clsx from 'clsx';
import type { LegacyRef } from 'react';
import { forwardRef } from 'react';

import Oval from './Oval';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
} & React.ComponentPropsWithRef<'button'>;

function Button(
  {
    variant = 'primary',
    className,
    loading = false,
    children,
    ...props
  }: ButtonProps,
  ref: LegacyRef<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      {...props}
      {...(loading && { disabled: loading })}
      className={clsx(
        {
          'bg-[#f97316] text-white': variant === 'primary',
          'bg-secondary text-primary': variant === 'secondary',
        },
        'flex justify-center rounded-[10px] cursor-pointer px-6 py-3 text-xs hover:bg-[#c2410c] font-normal disabled:opacity-80 md:text-sm',
        className
      )}
      ref={ref}
    >
      {loading ? (
        <span className="mr-3 transition-all">
          <Oval width={20} height={20} />
        </span>
      ) : null}
      {children}
    </button>
  );
}

export default forwardRef(Button);
