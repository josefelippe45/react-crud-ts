import React, { FC } from 'react';

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const ArrowRight: FC<IProps> = ({
  width = '20',
  height = '20',
  color = '#fff',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.165039 18.13L1.93504 19.9L11.835 10L1.93504 0.100006L0.165039 1.87001L8.29504 10L0.165039 18.13H0.165039Z"
        fill={color}
        fill-opacity="0.54"
      />
    </svg>
  );
};

export default ArrowRight;
