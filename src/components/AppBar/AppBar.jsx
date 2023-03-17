import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      <UserMenu/>
    </Header>
  );
};

export default AppBar;
