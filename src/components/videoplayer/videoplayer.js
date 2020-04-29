import React, {forwardRef} from 'react';

// eslint-disable-next-line
export const Videoplayer = forwardRef((props, ref) => (
  <video {...props} ref={ref}></video>
));
