import React from 'react';
import useTextInput from 'hooks/useTextInput';
import TextField from '@material-ui/core/TextField';

const EditField = ({ name, editField, toggleEditForm }) => {
  const [value, handleChange, reset] = useTextInput();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editField(name, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditField;
