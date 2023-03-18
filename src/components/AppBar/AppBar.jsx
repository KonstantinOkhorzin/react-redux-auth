import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
