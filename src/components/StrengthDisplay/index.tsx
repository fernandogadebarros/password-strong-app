import React, { useEffect, useState } from 'react';
import Card from '../Card';

const StrengthDisplay = ({ strength }: { strength: string }) => {
  const [strengthLength, setStrengthLength] = useState(1);
  const [strengthText, setStrengthText] = useState('TOO WEAK');
  const [strengthStatus, setStrengthStatus] = useState('border-red-light bg-red-light');

  useEffect(() => {
    switch (strength) {
      case 'too weak':
        setStrengthLength(1);
        setStrengthText('TOO WEAK');
        setStrengthStatus('border-red-light bg-red-light');
        break;

      case 'weak':
        setStrengthLength(2);
        setStrengthText('WEAK');
        setStrengthStatus('border-orange-light bg-orange-light');
        break;

      case 'medium':
        setStrengthLength(3);
        setStrengthText('MEDIUM');
        setStrengthStatus('border-yellow-light bg-yellow-light');

        break;
      case 'strong':
        setStrengthLength(4);
        setStrengthText('STRONG');
        setStrengthStatus('border-green-light bg-green-light');

        break;
    }
  }, [strength]);

  return (
    <Card className="flex justify-between p-3 my-6 bg-gray-darkest">
      <span className="text-gray-light uppercase font-semibold">STRENGTH</span>
      <div className="flex items-center gap-4 font-semibold">
        {strengthText}
        <div className="flex gap-1">
          {Array.from({ length: 4 }, (_, index) => {
            return (
              <span key={index} className={`w-2 h-6 border-2 ${index < strengthLength ? strengthStatus : 'border-white'}`} />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default StrengthDisplay;
