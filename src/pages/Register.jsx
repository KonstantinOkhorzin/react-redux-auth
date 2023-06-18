import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button } from '@mui/material';

import { registerSchema } from '../schemas';
import { register } from '../redux/auth/operations';
import WrapperForm from '../components/WrapperForm';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput';
import FormBody from '../components/FormBody';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values, actions) => {
    const { confirmPassword, ...formData } = values;
    dispatch(register(formData));
    actions.resetForm();
  };

  return (
    <WrapperForm title='Register'>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onFormSubmit}
      >
        {({ errors, touched, dirty, isValid }) => (
          <FormBody>
            <TextInput name='name' label='Name' errors={errors} touched={touched} />

            <TextInput name='email' label='Email' type='email' errors={errors} touched={touched} />

            <PasswordInput
              name='password'
              label='Password'
              type='password'
              errors={errors}
              touched={touched}
            />

            <PasswordInput
              name='confirmPassword'
              label='Confirm password'
              type='password'
              errors={errors}
              touched={touched}
            />

            <Button type='submit' variant='contained' disabled={!dirty || !isValid}>
              Submit
            </Button>
          </FormBody>
        )}
      </Formik>
    </WrapperForm>
  );
};

export default Register;
