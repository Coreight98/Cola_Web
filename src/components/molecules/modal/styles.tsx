import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(108, 123, 250, 0.23);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  align-items: center;
  background: white;
  min-width: 22vw;
  min-height: 50vh;
  opacity: 1;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000029;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  max-width: 5vw;
  color: ${theme.colors.VeryLightBlue};
  border-bottom: 0.3rem solid ${theme.colors.VeryLightBlue};
`;

const MajorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 20vw;
  max-height: 32vh;
  overflow: auto;
  row-gap: 1vmin;
  label {
    display: flex;
    align-items: center;
    column-gap: 1vmin;
    cursor: pointer;
  }
  &::-webkit-scrollbar {
    width: 1vmin;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.colors.VeryLightBlue};
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  p {
    cursor: pointer;
  }
`;
const CheckBox = styled.div<{ selected: boolean }>`
  border-radius: 100px;
  border: 1px solid #00000029;
  height: 1rem;
  width: 1rem;
  background: ${({ selected }) => (selected ? theme.colors.VeryLightBlue : 'none')};
`;

const Span = styled.span<{ selected: boolean }>`
  font-size: 1.2rem;
  color: ${({ selected }) => (selected ? theme.colors.VeryLightBlue : '#00000029')};
`;

export { Background, Content, Title, MajorWrapper, FooterWrapper, CheckBox, Span };
