import { Field } from 'formik';
import { TextField } from '@mui/material';

const TextInput = ({ name, type = 'text', label, errors, touched, ...restProps }) => {
  return (
    <Field
      name={name}
      type={type}
      label={label}
      error={errors[name] && touched[name]}
      helperText={touched[name] && errors[name]}
      as={TextField}
      fullWidth
      sx={{ mb: 2 }}
      {...restProps}
    />
  );
};

export default TextInput;
