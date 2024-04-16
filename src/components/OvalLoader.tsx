import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import Oval from './Oval';

type OvalLoaderProps = {
  title: string;
  width: number | string;
  height: number | string;
  containerProps: BoxProps;
};

function OvalLoader({
  title = '',
  height = 40,
  width = 40,
  containerProps,
}: Partial<OvalLoaderProps>) {
  return (
    <Box textAlign="center" {...containerProps}>
      <Box>
        <Oval width={width} height={height} stroke="#6b7280" />
      </Box>
      <Box>
        <small className="block" style={{ textTransform: 'capitalize' }}>
          {title}
        </small>
      </Box>
    </Box>
  );
}

export default OvalLoader;
