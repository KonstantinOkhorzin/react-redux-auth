import { Container, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/tasks'>Tasks</StyledLink>
    </Container>
  );
};

export default Navigation;
