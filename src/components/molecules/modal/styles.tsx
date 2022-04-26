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
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.shadow};
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  max-width: 5vw;
  color: ${theme.colors.blue[500]};
  border-bottom: 0.3rem solid ${theme.colors.blue[500]};
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
    background: ${theme.colors.blue[500]};
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  p {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
const CheckBox = styled.div<{ selected: boolean }>`
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.shadow};
  height: 1rem;
  width: 1rem;
  background: ${({ theme, selected }) => (selected ? theme.colors.blue[500] : 'none')};
`;

const Span = styled.span<{ selected: boolean }>`
  font-size: 1.2rem;
  color: ${({ selected, theme }) => (selected ? theme.colors.blue[500] : theme.colors.gray[100])};
`;

export { Background, Content, Title, MajorWrapper, FooterWrapper, CheckBox, Span };
