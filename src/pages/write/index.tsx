import dynamic from 'next/dynamic';

import { Container } from './styles';

const PostEditor = dynamic(() => import('@components/molecules/editor'), { ssr: false });
const PostViewer = dynamic(() => import('@components/molecules/editorViewer'), { ssr: false });

const Write = () => {
  return (
    <Container>
      <h2>글쓰기</h2>
      <hr />
      <section>
        <PostEditor />
      </section>
      <section>
        <PostViewer />
      </section>
    </Container>
  );
};
export default Write;
