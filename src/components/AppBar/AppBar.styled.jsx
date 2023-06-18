import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(12)};
  padding-right: ${({ theme }) => theme.spacing(12)};
  border-bottom: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.secondary};
`;
