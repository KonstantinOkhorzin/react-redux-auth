import { Container, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <StyledLink to='/register'>Register</StyledLink>
      <StyledLink to='/login'>Log In</StyledLink>
    </Container>
  );
};

export default AuthNav;
