import React from 'react';
import Card from '../Card';
import { MdContentCopy } from 'react-icons/md';

const DisplayPassword = ({ password }: any) => {
  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert('Senha copiada para a área de transferência');
        })
        .catch(err => {
          console.error('Erro ao copiar a senha: ', err);
        });
    }
  };

  console.log('password', password);

  return (
    <Card className="flex items-center justify-between  font-bold w-[90%] sm:w-96 p-6 mb-6">
      {password === '' ? 'You need to generate a password.' : password}
      <MdContentCopy
        className="cursor-pointer text-green-light hover:text-gray-lightest duration-200"
        size={16}
        onClick={handleCopyPassword}
      />
    </Card>
  );
};

export default DisplayPassword;
