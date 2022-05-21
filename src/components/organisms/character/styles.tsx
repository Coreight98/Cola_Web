import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const CharacterImage = styled.img`
  position: absolute;
  max-width: initial;
  max-height: initial;
`;
const CharacterDiv = styled.div`
  top: ${window.screen.height / 2}px;
  left: ${window.screen.width / 2 - 72}px;
  position: absolute;
  max-width: 32px;
  max-height: 32px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  -webkit-transform: scale(1.5);
`;

export { Container, CharacterImage, CharacterDiv };
