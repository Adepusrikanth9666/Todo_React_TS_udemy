import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

export const TaskDescriptionField: FC<ITextField> =
  (props): ReactElement => {
    const {
        onChange=(e)=>console.log(e),
        disabled=false} = props
    return (
      <TextField
        id="description"
        label="Description"
        placeholder="Description"
        variant="outlined"
        size="small"
        name="description"
        fullWidth
        multiline
        rows={4}
        onChange={onChange}
      disabled={disabled}
    
      />
    );
  };

//   TaskDescriptionField.propTypes = {
//     onChange: PropTypes.func,
//     disabled: PropTypes.bool,
//   };
