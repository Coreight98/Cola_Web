import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 47px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 6px #00000029;
`;
const Title = styled.h3`
  padding: 0 40px;
  color: ${({ theme }) => theme.text.colors.basic};
  font-size: 22px;
  flex: 1;
`;
const DescriptionWrapper = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex: 1;
  height: 47px;
  background: #dde1fc;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 25px;
  color: ${({ theme }) => theme.text.colors.basic};
  font-size: 17px;
  font-weight: 500;
`;
const SubDescription = styled.div`
  display: flex;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.primaryColor};
  height: 47px;
  border-radius: 25px;
  align-items: center;
  gap: 10px;
  color: white;
`;

export { Container, Title, DescriptionWrapper, SubDescription };
