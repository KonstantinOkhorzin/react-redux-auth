import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email')
    .required('Please enter email'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .matches(/[!@#$%^&*()]/, 'Password must contain at least one special character')
    .required('Please enter password'),
});

export default loginSchema;
