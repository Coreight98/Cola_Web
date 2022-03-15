import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 15rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 3px 6px 2px rgb(215 214 214 / 45%);
  transform: translateY(0) translateX(0);
  transition: all 200ms ease-in-out;
  &:hover {
    transform: translateY(-0.6rem) translateX(0.3rem);
    transition: all 200ms ease-in-out;
  }
`;
const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const Thumbnail = styled.div`
  height: 100%;
  width: 15rem;
  background: #8f8f8f;
  border-radius: 1rem;
`;
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.6rem;
`;
const WriterDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const BodyText = styled.p`
  flex: 1;
`;
const BottomContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
export { Container, TextWrapper, TopContent, BodyText, BottomContent, WriterDescription, Thumbnail, Title };
