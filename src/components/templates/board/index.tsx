import { useRouter } from 'next/router';

import { Container, BoardList } from './styles';

import BoardCard from '@molecules/boardCard';
import BoardPreviewItem from '@molecules/boardPreviewItem';
import BoardSimpleItem from '@molecules/boardSimpleItem';

import { useState } from 'react';

enum BoardLayout {
  'TILE',
  'SIMPLE_LIST',
  'PREVIEW_LIST',
}
const Board = () => {
  const router = useRouter();

  const [currentLayout, setCurrentLayout] = useState<BoardLayout>(BoardLayout.TILE);

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ display: 'inline-block' }}>게시판</h2>
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span
              style={{ cursor: 'pointer', color: currentLayout === BoardLayout.TILE ? 'blue' : '#222' }}
              onClick={() => setCurrentLayout(BoardLayout.TILE)}
            >
              타일
            </span>
            <span
              style={{ cursor: 'pointer', color: currentLayout === BoardLayout.SIMPLE_LIST ? 'blue' : '#222' }}
              onClick={() => setCurrentLayout(BoardLayout.SIMPLE_LIST)}
            >
              간단리스트
            </span>
            <span
              style={{ cursor: 'pointer', color: currentLayout === BoardLayout.PREVIEW_LIST ? 'blue' : '#222' }}
              onClick={() => setCurrentLayout(BoardLayout.PREVIEW_LIST)}
            >
              상세리스트
            </span>
          </div>
          <p>정렬</p>
        </div>
      </div>
      <section>
        <button onClick={() => router.push('/write')}>게시글 작성</button>
        <BoardList>
          {[...new Array(20)].map((_, i) => {
            if (currentLayout === BoardLayout.TILE) return <BoardCard key={i} id={i} />;
            else if (currentLayout === BoardLayout.PREVIEW_LIST) return <BoardPreviewItem key={i} id={i} />;
            else if (currentLayout === BoardLayout.SIMPLE_LIST) return <BoardSimpleItem key={i} id={i} />;
          })}
        </BoardList>
      </section>
    </Container>
  );
};
export default Board;
