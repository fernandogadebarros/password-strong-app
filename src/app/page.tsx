'use client';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Checkbox from '@/components/Checkbox';
import DisplayPassword from '@/components/DisplayPassword';
import RangeSlider from '@/components/RangeSlider';
import StrengthDisplay from '@/components/StrengthDisplay';
import {
  usePasswordContext,
  SET_RANGE,
  SET_LOWERCASE,
  SET_NUMBERS,
  SET_SYMBOLS,
  GENERATE_PASSWORD,
  COPY_PASSWORD,
} from '@/context/passwordContext';
import { FaArrowRight } from 'react-icons/fa6';
import { checkboxes } from '@/utils/home';

export default function Home() {
  const { state, dispatch } = usePasswordContext();
  const { rangeValue, includeUppercase, includeLowercase, includeNumbers, includeSymbols, password, strength } = state;

  const checkboxState: Record<string, boolean> = {
    uppercase: includeUppercase,
    lowercase: includeLowercase,
    numbers: includeNumbers,
    symbols: includeSymbols,
  };

  return (
    <main className="bg-gray-darkest h-screen flex flex-col items-center justify-center">
      <DisplayPassword password={password} onCopyPassword={() => dispatch({ type: COPY_PASSWORD })} />

      <Card className="w-[90%] sm:w-96 p-6">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Character Length</span>
          <span className="text-green-light font-semibold">{rangeValue}</span>
        </div>
        <RangeSlider setRangeValue={value => dispatch({ type: SET_RANGE, payload: Number(value) })} rangeValue={rangeValue} />

        <div className="flex flex-col mt-4">
          {checkboxes.map(checkbox => (
            <Checkbox
              key={checkbox.id}
              id={checkbox.name}
              name={checkbox.name}
              text={checkbox.text}
              checked={!!checkboxState[checkbox.name]}
              onChange={() => dispatch({ type: checkbox.type as any, payload: !checkboxState[checkbox.name] })}
            />
          ))}
        </div>

        <StrengthDisplay strength={strength} />

        <Button
          className="flex items-center gap-6 w-full p-4 font-semibold"
          onClick={() => dispatch({ type: GENERATE_PASSWORD })}
        >
          Generate
          <FaArrowRight size={14} />
        </Button>
      </Card>
    </main>
  );
}
