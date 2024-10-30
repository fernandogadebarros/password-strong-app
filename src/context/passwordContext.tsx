import React, { createContext, useReducer, ReactNode, useContext } from 'react';
import { PasswordAction, PasswordContextProps, PasswordState } from './types';
import {
  COPY_PASSWORD,
  GENERATE_PASSWORD,
  SET_LOWERCASE,
  SET_NUMBERS,
  SET_PASSWORD,
  SET_RANGE,
  SET_STRENGTH,
  SET_SYMBOLS,
  SET_UPPERCASE,
} from './constants';

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
    default:
      return state;
  }
};

const initialState: PasswordState = {
  rangeValue: 10,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: false,
  includeSymbols: false,
  password: '',
  strength: 'too weak',
};

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
