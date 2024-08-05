import React from 'react';
import { DisplayRangeProps } from './types';

export const DisplayRange = ({ rangeValue }: DisplayRangeProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="font-semibold">Character Length</span>
      <span className="text-green-light font-semibold">{rangeValue}</span>
    </div>
  );
};
