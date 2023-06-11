import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { registerSchema } from '../schemas';

import { register } from '../redux/auth/operations';

import TextInput from '../components/TextInput';

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
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onFormSubmit}
      >
        <Form>
          <TextInput name='name' label='Login:' placeholder='name' />
          <br />
          <TextInput name='email' label='Email:' type='email' />
          <br />
          <TextInput name='password' label='Password:' type='password' />
          <br />
          <TextInput name='confirmPassword' label='Confirm password:' type='password' />
          <br />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
