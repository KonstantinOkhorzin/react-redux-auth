import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Container, StyledLink } from './Navigation.styled';

const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <StyledLink to='/'>Home</StyledLink>
      {isLoggedIn && <StyledLink to='/tasks'>Tasks</StyledLink>}
    </Container>
  );
};

export default Navigation;
