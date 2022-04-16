import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Container = styled.div`
  padding: 5rem 0px;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template:
    'title . mode .' 1fr
    'contents contents contents hashtagBar' 10fr
    '. . btn .' 1fr
    / 6fr 4fr 2fr 2fr;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template:
      'title . mode .' 1fr
      'contents contents contents .' 10fr
      'hashtagBar hashtagBar btn .' 1fr
      / 6fr 4fr 2fr 2fr;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template:
      'title . mode' 1fr
      'contents contents contents' 10fr
      'hashtagBar hashtagBar btn' 1fr
      / 6fr 4fr 2fr;
  }
`;

const HashtagBar = styled.div`
  grid-area: hashtagBar;
  border-radius: 30px;
  padding: 2rem;
  max-width: 10vw;
  background: ${theme.colors.blue[300]};
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: inset 0px 0px 6px ${({ theme }) => theme.colors.shadow};
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    place-items: center;
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.shadow};
  border-radius: 15px;
`;

const TitleInput = styled.input`
  grid-area: title;
  display: flex;
  justify-content: flex-start;
  border: none;
  background: none;
  ::placeholder {
    color: ${theme.colors.blue[500]};
  }
`;

export { Container, HashtagBar, Wrapper, TitleInput };
