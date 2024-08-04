import { SET_UPPERCASE, SET_LOWERCASE, SET_SYMBOLS, SET_NUMBERS } from '@/context/passwordContext';

export const checkboxes = [
  {
    id: 1,
    name: 'uppercase',
    text: 'Include Uppercase Letters',
    type: SET_UPPERCASE,
  },
  {
    id: 2,
    name: 'lowercase',
    text: 'Include Lowercase Letters"',
    type: SET_LOWERCASE,
  },
  {
    id: 3,
    name: 'numbers',
    text: 'Include Numbers',
    type: SET_NUMBERS,
  },
  {
    id: 4,
    name: 'symbols',
    text: 'Include Symbols',
    type: SET_SYMBOLS,
  },
];
