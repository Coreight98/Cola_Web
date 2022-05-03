import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Container = styled.div`
  display: grid;

  padding: 1rem;
  box-sizing: border-box;
  grid-template:
    'title .' 1fr
    'info content' 10fr
    / 5fr 4fr;
  column-gap: 4rem;
`;

const Title = styled.h2`
  grid-area: title;
  color: ${theme.colors.blue[500]};
`;

const CardContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ContentContainer = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const BackgroundImage = styled.div`
  z-index: 2;
  position: absolute;
  left: -98px;
  width: 192px;
  height: 196px;
  border-radius: 100vw;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[600]};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export { Container, Title, CardContainer, ContentContainer, BackgroundImage };
