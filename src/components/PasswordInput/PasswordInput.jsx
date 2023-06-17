import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Field } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@mui/material';

const PasswordInput = ({ name, label, errors, touched }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputId = nanoid();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  //перешкоджає втраті фокусу в полі вводу пароля
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth error={errors[name] && touched[name]} sx={{ mb: 2 }}>
      <InputLabel htmlFor={passwordInputId}>Password</InputLabel>
      <Field
        name={name}
        label={label}
        as={OutlinedInput}
        id={passwordInputId}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
              sx={{
                color: errors.password && touched.password ? 'error.main' : 'inherit',
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {touched[name] && errors[name] && <FormHelperText>{errors[name]}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;
