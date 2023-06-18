import { Form } from 'formik';
import styled from '@emotion/styled';

const FormGrid = styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme}) => theme.spacing(4)};
`;

const FormBody = ({ children }) => {
  return <FormGrid>{children}</FormGrid>;
};

export default FormBody;
