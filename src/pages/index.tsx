import styled from '@emotion/styled';
import type { NextPage } from 'next';

import TodoSection from '@components/organisms/homeSection/todoSection';
import BoardSection from '@organisms/homeSection/boardSection';

const BoardSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 2rem auto;
  gap: 2rem;
  padding: 2rem 1rem;
  height: 35rem;
`;
const Container = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const Banner = styled.div`
  max-width: 1920px;
  width: 100%;

  background: url(src/assets/images/home_banner.svg);
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Banner></Banner>
      <BoardSectionWrapper>
        <TodoSection />
      </BoardSectionWrapper>
      <BoardSectionWrapper>
        <BoardSection />
        <BoardSection />
      </BoardSectionWrapper>
    </Container>
  );
};

export default Home;
