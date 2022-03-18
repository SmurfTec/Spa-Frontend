import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import styles from 'styles/commonStyles';

const FormTextField = ({
  name,
  type = 'text',
  values,
  handleChange,
  touched,
  handleBlur,
  errors,
  inputIcon,
  placeholder,
  size,
}) => {
  const classes = styles();
  return (
    <TextField
      name={name}
      type={type || 'text'}
      value={values[name]}
      onChange={handleChange}
      placeholder={placeholder}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      onBlur={handleBlur}
      variant='outlined'
      color='secondary'
      size={size || 'medium'}
      className={classes.lghtPinkInpField}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>{inputIcon}</InputAdornment>
        ),
      }}
    />
  );
};

export default FormTextField;
