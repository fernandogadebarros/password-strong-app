import React from 'react';
import { clsx } from 'clsx';
import { ButtonProps } from './types';

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={clsx('button', className)} {...props} />;
};
