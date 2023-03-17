import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;