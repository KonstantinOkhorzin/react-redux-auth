import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: 50px auto 0;
  width: 300px;
`;

const Title = styled.h1`
  text-align: center;
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
