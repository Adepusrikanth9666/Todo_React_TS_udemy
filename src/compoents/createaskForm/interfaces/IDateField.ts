import { IDisabled } from './IDisabled';

export interface IDatefield extends IDisabled {
  value?: Date | null;
  onChange?: (value: Date | null) => void;
}
