import React, { createContext, useReducer, Dispatch, ReactNode, useContext } from 'react';

// Interfaces para estado e ações
interface PasswordState {
  rangeValue: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  password: string;
  strength: 'too weak' | 'weak' | 'medium' | 'strong';
}

export type PasswordAction =
  | { type: typeof SET_RANGE; payload: number }
  | { type: typeof SET_UPPERCASE; payload: boolean }
  | { type: typeof SET_LOWERCASE; payload: boolean }
  | { type: typeof SET_NUMBERS; payload: boolean }
  | { type: typeof SET_SYMBOLS; payload: boolean }
  | { type: typeof SET_PASSWORD; payload: string }
  | { type: typeof SET_STRENGTH; payload: 'too weak' | 'weak' | 'medium' | 'strong' }
  | { type: typeof GENERATE_PASSWORD }
  | { type: typeof COPY_PASSWORD };

// Criação do contexto
interface PasswordContextProps {
  state: PasswordState;
  dispatch: Dispatch<PasswordAction>;
}

// Definição das ações
const SET_RANGE = 'SET_RANGE';
const SET_UPPERCASE = 'SET_UPPERCASE';
const SET_LOWERCASE = 'SET_LOWERCASE';
const SET_NUMBERS = 'SET_NUMBERS';
const SET_SYMBOLS = 'SET_SYMBOLS';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_STRENGTH = 'SET_STRENGTH';
const GENERATE_PASSWORD = 'GENERATE_PASSWORD';
const COPY_PASSWORD = 'COPY_PASSWORD';

// Funções auxiliares
const getRandomCharacter = (characters: string): string => characters[Math.floor(Math.random() * characters.length)];

const generatePassword = (state: PasswordState): string => {
  const { rangeValue, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = state;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let allCharacters = '';
  if (includeUppercase) allCharacters += uppercase;
  if (includeLowercase) allCharacters += lowercase;
  if (includeNumbers) allCharacters += numbers;
  if (includeSymbols) allCharacters += symbols;

  if (!allCharacters) return '';

  let password = '';
  for (let i = 0; i < rangeValue; i++) {
    password += getRandomCharacter(allCharacters);
  }

  return password;
};

const getPasswordStrength = (password: string): 'too weak' | 'weak' | 'medium' | 'strong' => {
  const length = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password);

  const strengthCriteria = [hasUppercase, hasLowercase, hasNumbers, hasSymbols].filter(Boolean).length;

  if (length < 6 || strengthCriteria < 2) return 'too weak';
  if (length < 8 || strengthCriteria < 3) return 'weak';
  if (length < 10 || strengthCriteria < 4) return 'medium';
  return 'strong';
};

const PasswordContext = createContext<PasswordContextProps | undefined>(undefined);

const usePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error('useContext must be used within a PasswordProvider');
  }

  return context;
};

// Definição do reducer
const passwordReducer = (state: PasswordState, action: PasswordAction): PasswordState => {
  switch (action.type) {
    case SET_RANGE:
      return { ...state, rangeValue: action.payload };
    case SET_UPPERCASE:
      return { ...state, includeUppercase: action.payload };
    case SET_LOWERCASE:
      return { ...state, includeLowercase: action.payload };
    case SET_NUMBERS:
      return { ...state, includeNumbers: action.payload };
    case SET_SYMBOLS:
      return { ...state, includeSymbols: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_STRENGTH:
      return { ...state, strength: action.payload };
    case GENERATE_PASSWORD: {
      const newPassword = generatePassword(state);
      return {
        ...state,
        password: newPassword,
        strength: getPasswordStrength(newPassword),
      };
    }
    case COPY_PASSWORD: {
      navigator.clipboard
        .writeText(state.password)
        .then(() => {
          alert('Senha copiada para a área de transferência');
        })
        .catch(err => {
          console.error('Erro ao copiar a senha: ', err);
        });
      return state;
    }
    default:
      return state;
  }
};

// Estado inicial
const initialState: PasswordState = {
  rangeValue: 10,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
  password: '',
  strength: 'too weak',
};

// Criação do provider
const PasswordProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  return <PasswordContext.Provider value={{ state, dispatch }}>{children}</PasswordContext.Provider>;
};

export {
  usePasswordContext,
  PasswordContext,
  PasswordProvider,
  SET_RANGE,
  SET_UPPERCASE,
  SET_LOWERCASE,
  SET_NUMBERS,
  SET_SYMBOLS,
  GENERATE_PASSWORD,
  COPY_PASSWORD,
};
