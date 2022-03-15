import styled from '@emotion/styled';

const Container = styled.div`
  display: 'flex';
  width: 100%;
  overflow: auto;
  flex-direction: 'column';
`;

const ViewArea = styled.div`
  width: 100%;
  min-width: 40vw;
  height: 70vh;
  border: none;
  outline: none;
`;
const Wrapper = styled.div`
  display: flex;
`;
export { ViewArea, Wrapper, Container };
