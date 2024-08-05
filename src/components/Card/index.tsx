import React from 'react';
import { clsx } from 'clsx';
import { CardProps } from './types';

export const Card = ({ className, children }: CardProps) => {
  return <div className={clsx(['bg-gray-dark text-gray-lightest', className])}>{children}</div>;
};
