import React from 'react';
import { Card } from '../Card';
import { MdContentCopy } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import { handleCopyPassword } from '../Displays/utils';
import { DisplatPasswordProps } from './types';

export const DisplayPassword = ({ password }: DisplatPasswordProps) => {
  const displayText = password === '' ? 'You need to generate a password.' : password;
  return (
    <>
      <Card className="flex items-center justify-between  font-bold w-[90%] sm:w-96 p-6 mb-6">
        {displayText}
        <MdContentCopy
          className="cursor-pointer text-green-light hover:text-gray-lightest duration-200"
          size={16}
          onClick={() => handleCopyPassword(password)}
        />
      </Card>
      <ToastContainer position="top-center" autoClose={2000} pauseOnHover theme="dark" />
    </>
  );
};
