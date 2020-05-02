import React, {
  forwardRef,
  VideoHTMLAttributes,
  MutableRefObject,
} from 'react';

export const VideoplayerComponent = (props: VideoHTMLAttributes<{}>, ref: MutableRefObject<HTMLVideoElement>): JSX.Element => (
  <video {...props} ref={ref}></video>
);

export const Videoplayer = forwardRef(VideoplayerComponent);
