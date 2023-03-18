import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

import { Container } from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Container>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </Container>
  );
};

export default UserMenu;
