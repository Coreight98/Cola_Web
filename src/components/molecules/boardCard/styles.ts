import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  width: 18rem;
  height: 24rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  box-shadow: 3px 3px 6px 2px rgb(215 214 214 / 45%);
  transform: translateY(0) translateX(0);
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-0.6rem) translateX(0.3rem);
    transition: all 200ms ease-in-out;
  }
`;
const TextWrapper = styled.div`
  padding: 0.5rem;
  flex: 1;
`;
const Title = styled.h3`
  margin: 0;
  padding: 0.5rem 0;
  font-weight: 600;
  color: #222222;
  font-size: 1.2rem;
`;
const BodyText = styled.p`
  margin: 0;
  padding: 0;
  color: #333333;
  font-size: 1rem;
`;
const DescriptionWrapper = styled.div`
  height: 10%;
  padding: 0.5 rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #222222;
`;
const LeftContent = styled.div`
  display: flex;
`;

export { Container, TextWrapper, Title, BodyText, DescriptionWrapper, LeftContent };
