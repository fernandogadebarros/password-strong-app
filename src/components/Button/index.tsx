import React, { FC, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={clsx('button', className)} {...props} />;
};

export default Button;
