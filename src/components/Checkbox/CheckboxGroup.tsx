import React from 'react';
import { Checkbox } from '.';
import { checkboxes } from '@/utils/home';
import { usePasswordContext } from '@/context/passwordContext';

export const CheckboxGroup = () => {
  const { state, dispatch } = usePasswordContext();
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;

  const checkboxState: Record<string, boolean> = {
    uppercase: includeUppercase,
    lowercase: includeLowercase,
    numbers: includeNumbers,
    symbols: includeSymbols,
  };

  return (
    <div className="flex flex-col mt-4">
      {checkboxes.map(checkbox => (
        <Checkbox
          key={checkbox.id}
          id={checkbox.name}
          name={checkbox.name}
          text={checkbox.text}
          checked={!!checkboxState[checkbox.name]}
          onChange={() => dispatch({ type: checkbox.type, payload: !checkboxState[checkbox.name] })}
        />
      ))}
    </div>
  );
};
