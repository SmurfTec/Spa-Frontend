import React from 'react';
import useTextInput from 'hooks/useTextInput';
import TextField from '@material-ui/core/TextField';
import { Box, Button, IconButton } from '@material-ui/core';

import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useManyInputs } from 'hooks';

const EditField = ({
  classes,
  name,
  value,
  editedValue,
  toggleEditForm,
}) => {
  const initialAddress = {
    street: '',
    city: '',
    country: '',
    postalCode: 12,
  };
  const [fieldValue, handleChange, reset] = useTextInput(value);
  const [inputState, handleTxtChange, , , , ,] =
    useManyInputs(initialAddress);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name === 'address') editedValue(name, inputState);
        else editedValue(name, fieldValue);
        reset();
        toggleEditForm();
      }}
      style={{ width: '100%' }}
    >
      <Box
        display='flex'
        alignItems='center'
        gridGap={15}
        className={classes.editBtns}
      >
        {name === 'address' ? (
          <>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              gridGap={5}
            >
              <TextField
                name='street'
                value={inputState.street}
                onChange={handleTxtChange}
                placeholder='Street'
                variant='outlined'
                margin='dense'
                required
                fullWidth
                autoFocus
              />

              <TextField
                margin='dense'
                name='city'
                value={inputState.city}
                onChange={handleTxtChange}
                placeholder='City'
                required
                fullWidth
                variant='outlined'
              />

              <TextField
                margin='dense'
                name='country'
                value={inputState.country}
                onChange={handleTxtChange}
                placeholder='Country'
                required
                fullWidth
                variant='outlined'
              />
              <TextField
                margin='dense'
                name='postalCode'
                value={inputState.postalCode}
                onChange={handleTxtChange}
                type='string'
                placeholder='Postal Code'
                required
                fullWidth
                variant='outlined'
              />
            </Box>
          </>
        ) : (
          <TextField
            margin='dense'
            value={fieldValue}
            onChange={handleChange}
            type={name === 'email' ? 'email' : 'number'}
            fullWidth
            autoFocus
            required
            variant='outlined'
            placeholder={name}
          />
        )}

        <Box
          display='flex'
          gridGap={10}
          flexWrap='nowrap'
          className='editButtons'
        >
          <IconButton size='small' type='submit' className='doneBtn'>
            <DoneIcon />
          </IconButton>
          <IconButton
            size='small'
            onClick={toggleEditForm}
            className='cancelBtn'
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  );
};

export default EditField;
