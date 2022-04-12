import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 270px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 6px #00000029;
  transform: translateY(0) translateX(0);
  transition: all 200ms ease-in-out;
  &:hover {
    transform: translateY(-0.4rem) translateX(0.1rem);
    transition: all 200ms ease-in-out;
  }
`;
const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;
const Thumbnail = styled.div`
  height: 100%;
  width: 320px;
  background: ${({ theme: { colors } }) => `linear-gradient(to top,${colors.primaryLightColor}, 60%, white)`};
  border-radius: 10px;
`;
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  margin: 0;
  padding: 10px 0;
  font-weight: 700;
  font-size: 1.6rem;
  color: #4f4f53;
`;
const Divider = styled.div`
  width: 85px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;
const BodyText = styled.p`
  flex: 1;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #4f4f53;
`;
const BottomContent = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  background: #dde1fc;
  border-radius: 25px;
`;
const ProfileThumb = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.primaryColor};
`;
const WriterDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  color: ${({ theme }) => theme.text.colors.basic};
  font-size: 17px;
  font-weight: 500;
`;
const BoardDescription = styled.div`
  display: flex;
  flex-basis: 24%;
  height: 100%;
  border-radius: 25px;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background: ${({ theme }) => theme.colors.primaryColor};
  font-weight: 500;
`;
export {
  Container,
  TextWrapper,
  TopContent,
  BodyText,
  BottomContent,
  WriterDescription,
  Thumbnail,
  Title,
  Divider,
  ProfileThumb,
  BoardDescription,
};
