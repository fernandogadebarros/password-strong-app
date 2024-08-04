'use client';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

const RangeSlider = ({ rangeValue, setRangeValue }: { rangeValue: number; setRangeValue: Dispatch<SetStateAction<number>> }) => {
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

export default RangeSlider;
