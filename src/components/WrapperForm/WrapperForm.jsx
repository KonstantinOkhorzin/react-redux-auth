import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ theme }) => theme.spacing(12)};
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`;

const WrapperForm = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default WrapperForm;
