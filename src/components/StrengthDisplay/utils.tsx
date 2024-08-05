import { Dispatch, SetStateAction } from 'react';
import { StrengthDisplayProps } from './types';

interface GetStrengthStatusProsp extends StrengthDisplayProps {
  setStrengthLength: Dispatch<SetStateAction<number>>;
  setStrengthText: Dispatch<SetStateAction<string>>;
  setStrengthStatus: Dispatch<SetStateAction<string>>;
}

export const getStrengthStatus = ({
  strength,
  setStrengthLength,
  setStrengthText,
  setStrengthStatus,
}: GetStrengthStatusProsp) => {
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
};
