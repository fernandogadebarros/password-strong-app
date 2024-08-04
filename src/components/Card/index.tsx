import React, { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return <div className={clsx(['bg-gray-dark text-gray-lightest', className])}>{children}</div>;
};

export default Card;
