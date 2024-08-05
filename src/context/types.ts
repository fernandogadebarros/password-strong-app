import { Dispatch } from 'react';
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

export interface PasswordState {
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

export interface PasswordContextProps {
  state: PasswordState;
  dispatch: Dispatch<PasswordAction>;
}
