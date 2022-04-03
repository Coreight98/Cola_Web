import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
const Title = styled.h1`
  font-size: 80px;
  font-family: 'GmarketSans';
  letter-spacing: 0px;
  color: #6c7bfa;
  padding: 0;
  margin: 0;
`;
const PolicyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const NextBtn = styled.button`
  width: 364px;
  height: 54px;
  /* UI Properties */
  background: #6c7bfa;
  box-shadow: 0px 0px 10px #00000029;
  border-radius: 43px;
  border: none;
  opacity: 1;
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 0px;
  cursor: pointer;
`;

export { Container, Title, PolicyWrapper, NextBtn };
