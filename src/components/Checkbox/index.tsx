import React, { HTMLAttributes } from 'react';
import { CheckBoxProps } from './types';

export const Checkbox = ({ id, name, text, checked, ...props }: CheckBoxProps) => {
  return (
    <div className="checkbox-group">
      <input type="checkbox" id={id} name={name} checked={checked} {...props} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};
