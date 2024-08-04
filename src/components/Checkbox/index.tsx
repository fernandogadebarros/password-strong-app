import React, { HTMLAttributes } from 'react';

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  className?: string;
}

const Checkbox = ({ id, name, text, checked, ...props }: CheckBoxProps) => {
  return (
    <div className="checkbox-group">
      <input type="checkbox" id={id} name={name} checked={checked} {...props} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Checkbox;
