import styled from '@emotion/styled';

import Header from '@molecules/header';

const Container = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 5rem;
  /* background: salmon; */
`;

const Navigation = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
export default Navigation;
