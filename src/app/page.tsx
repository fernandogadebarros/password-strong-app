'use client';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { usePasswordContext, SET_RANGE, GENERATE_PASSWORD, COPY_PASSWORD } from '@/context/passwordContext';
import { DisplayPassword } from '@/components/Displays/DisplayPassword';
import { DisplayRange } from '@/components/Displays/DisplayRange';
import { RangeSlider } from '@/components/RangeSlider';
import { CheckboxGroup } from '@/components/Checkbox/CheckboxGroup';
import { StrengthDisplay } from '@/components/StrengthDisplay';
import { FaArrowRight } from 'react-icons/fa6';

export default function Home() {
  const { state, dispatch } = usePasswordContext();
  const { rangeValue, password, strength } = state;

  return (
    <main className="bg-gray-darkest h-screen flex flex-col items-center justify-center">
      <DisplayPassword password={password} onCopyPassword={() => dispatch({ type: COPY_PASSWORD })} />

      <Card className="w-[90%] sm:w-96 p-6">
        <DisplayRange rangeValue={rangeValue} />
        <RangeSlider setRangeValue={value => dispatch({ type: SET_RANGE, payload: Number(value) })} rangeValue={rangeValue} />

        <CheckboxGroup />
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
