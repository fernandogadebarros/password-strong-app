'use client';
import { ChangeEvent } from 'react';
import { RangeSliderProps } from './types';

export const RangeSlider = ({ rangeValue, setRangeValue }: RangeSliderProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setRangeValue(Number(target.value));
  };

  return (
    <div className="wrap">
      <input className="w-full" type="range" min="1" max="20" value={rangeValue} onChange={handleChange} />
    </div>
  );
};
