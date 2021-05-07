import React, { FC } from 'react';

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

const ArrowLeft: FC<IProps> = ({
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
        d="M11.835 1.87001L10.055 0.100006L0.165039 10L10.065 19.9L11.835 18.13L3.70504 10L11.835 1.87001Z"
        fill={color}
        fill-opacity="0.54"
      />
    </svg>
  );
};

export default ArrowLeft;
