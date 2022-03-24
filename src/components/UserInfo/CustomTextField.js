import { TextField } from '@material-ui/core';
import React from 'react';

const CustomTextField = ({
  name,
  type = 'text',
  values,
  handleChange,
  //   touched,
  handleBlur,
  //   errors,
  placeholder,
  size,
  extras,
}) => {
  return (
    <TextField
      name={name}
      type={type || 'text'}
      value={values[name]}
      onChange={handleChange}
      label={placeholder}
      placeholder={placeholder.toLowerCase()}
      //   error={touched[name] && Boolean(errors[name])}
      //   helperText={touched[name] && errors[name]}
      onBlur={handleBlur}
      variant='outlined'
      color='secondary'
      size={size || 'medium'}
      margin='dense'
      fullWidth
      {...extras}
    />
  );
};

export default CustomTextField;
