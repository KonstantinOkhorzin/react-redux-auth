import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from '../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onFormSubmit}>
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

export default Login;
