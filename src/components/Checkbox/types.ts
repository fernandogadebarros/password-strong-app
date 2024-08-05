import { HTMLAttributes } from 'react';

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  className?: string;
}

export type CheckboxType = 'SET_UPPERCASE' | 'SET_LOWERCASE' | 'SET_NUMBERS' | 'SET_SYMBOLS';

export interface CheckboxItem {
  id: number;
  name: string;
  text: string;
  type: CheckboxType;
}
