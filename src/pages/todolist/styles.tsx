import styled from '@emotion/styled';

const Container = styled.div`
  width: 50vw;
  height: 50vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckBoxWrapper = styled(Wrapper)`
  flex-direction: row;
`;
export { Container, Wrapper, CheckBoxWrapper };
