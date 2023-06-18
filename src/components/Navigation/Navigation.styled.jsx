import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
