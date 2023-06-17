import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  TextField,
  Button,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
} from '@mui/material';

import { logIn } from '../redux/auth/operations';
import { loginSchema } from '../schemas';
import WrapperForm from '../components/WrapperForm';

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  //перешкоджає втраті фокусу в полі вводу пароля
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onFormSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const initialValues = { email: '', password: '' };

  return (
    <WrapperForm title='Login'>
      <Formik initialValues={initialValues} onSubmit={onFormSubmit} validationSchema={loginSchema}>
        {({ errors, touched, dirty, isValid }) => (
          <Form>
            <Field
              as={TextField}
              fullWidth
              type='email'
              name='email'
              label='Email'
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth error={errors.password && touched.password} sx={{ mb: 2 }}>
              <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
              <Field
                as={OutlinedInput}
                id='outlined-adornment-password'
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
                name='password'
                label='Password'
              />
              {touched.password && errors.password && (
                <FormHelperText>{errors.password}</FormHelperText>
              )}
            </FormControl>

            <Button type='submit' variant='contained' fullWidth disabled={!dirty || !isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </WrapperForm>
  );
};

export default Login;
