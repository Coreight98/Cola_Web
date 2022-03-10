import styled from '@emotion/styled';

const Container = styled.div`
  width: 80vw;
  height: 100%;
  padding: 1rem 2rem;
`;

const EditorWrapper = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HashtagInput = styled.input`
  border: none;
`;
const VerticalLine = styled.div`
  height: 70vh;
  width: 1px;
  border: 0.5px solid;
  opacity: 50%;
`;
const TitleInput = styled(HashtagInput)`
  font-size: 2rem;
`;

export { Container, EditorWrapper, Wrapper, HashtagInput, TitleInput, VerticalLine };
