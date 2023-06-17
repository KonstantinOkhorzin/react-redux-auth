import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@mui/material';

import { logIn } from '../redux/auth/operations';
import { loginSchema } from '../schemas';
import WrapperForm from '../components/WrapperForm';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';

const Login = () => {
  const dispatch = useDispatch();

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
            <TextInput name='email' type='email' label='Email' errors={errors} touched={touched} />

            <PasswordInput name='password' label='Password' errors={errors} touched={touched} />

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
