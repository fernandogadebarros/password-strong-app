import { toast } from 'react-toastify';

export const handleCopyPassword = (password: string) => {
  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => toast('The password was copied successfully'))
      .catch(err => console.error('Erro ao copiar a senha: ', err));
  }
};
