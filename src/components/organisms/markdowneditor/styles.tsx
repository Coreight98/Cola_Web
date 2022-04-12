import styled from '@emotion/styled';

const Container = styled.div`
  box-shadow: inset 0px 0px 6px #00000029;
  grid-area: contents;
  display: flex;
  width: 100%;
  height: 100%;
`;
const VerticalLine = styled.div`
  height: 100%;
  width: 1px;
  border: 0.5px solid;
  opacity: 50%;
`;

export { Container, VerticalLine };
