import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from '../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'login':
        return setLogin(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ login, email, password }));
    setLogin('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onFormSubmit}>
        <label>
          Login:
          <input type='text' name='login' value={login} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type='email' name='email' value={email} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password' value={password} onChange={onInputChange} />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
