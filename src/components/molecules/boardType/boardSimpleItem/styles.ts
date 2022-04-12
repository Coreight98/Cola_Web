import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgb(215 214 214 / 45%);
`;
const Title = styled.h3``;
const DescriptionWrapper = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`;
const SubDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Container, Title, DescriptionWrapper, SubDescription };
