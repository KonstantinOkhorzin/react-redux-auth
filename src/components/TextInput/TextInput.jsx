import { Field } from 'formik';

import FormError from '../FormError';

const TextInput = ({ label, name, type = 'text', ...restProps }) => {
  return (
    <label>
      {label}
      <Field name={name} {...restProps} />
      <FormError name={name} />
    </label>
  );
};

export default TextInput;
