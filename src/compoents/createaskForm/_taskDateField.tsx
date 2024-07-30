import React, { FC, ReactElement } from 'react';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDatefield } from './interfaces/IDateField';

export const TaskDateField: FC<IDatefield> = (
  props,
): ReactElement => {
  const {
    disabled = false,
    onChange,
    value = new Date(),
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        format="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};
