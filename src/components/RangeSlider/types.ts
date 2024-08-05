import { Dispatch, SetStateAction } from 'react';

export interface RangeSliderProps {
  rangeValue: number;
  setRangeValue: Dispatch<SetStateAction<number>>;
}
