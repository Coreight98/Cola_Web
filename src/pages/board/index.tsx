import { useRouter } from 'next/router';

import { Container } from './styles';
const Board = () => {
  const router = useRouter();

  return (
    <Container>
      <h2>게시판</h2>
      <section>
        <button onClick={() => router.push('/write')}>게시글 작성</button>
      </section>
    </Container>
  );
};
export default Board;
