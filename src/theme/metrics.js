import { pxToRem } from '~/functions';

export default {
  maxWidth: pxToRem(1100),
  borderRadius: (multiplier = 1) => pxToRem(12 * multiplier),
  baseSpacing: (multiplier = 1) => pxToRem(8 * multiplier),
};
