import React, { useEffect, useState } from 'react';
import { Card } from '../Card';
import { getStrengthStatus } from './utils';
import { StrengthDisplayProps } from './types';

export const StrengthDisplay = ({ strength }: StrengthDisplayProps) => {
  const [strengthLength, setStrengthLength] = useState(1);
  const [strengthText, setStrengthText] = useState('TOO WEAK');
  const [strengthStatus, setStrengthStatus] = useState('border-red-light bg-red-light');

  useEffect(() => {
    getStrengthStatus({
      strength,
      setStrengthLength,
      setStrengthText,
      setStrengthStatus,
    });
  }, [strength]);

  return (
    <Card className="flex justify-between p-3 my-6 bg-gray-darkest">
      <span className="text-gray-light uppercase font-semibold">STRENGTH</span>
      <div className="flex items-center gap-4 font-semibold">
        {strengthText}
        <div className="flex gap-1">
          {Array.from({ length: 4 }, (_, strengthIndex) => {
            const checkStrengthStatusBars = strengthIndex < strengthLength ? strengthStatus : 'border-white';
            return <span key={`strength_${strengthIndex}`} className={`w-2 h-6 border-2 ${checkStrengthStatusBars}`} />;
          })}
        </div>
      </div>
    </Card>
  );
};
