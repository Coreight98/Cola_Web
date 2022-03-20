import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background: #f6f2d4;
`;

const FolderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
  background: #f6f2d4;
`;
const BtnAddTodo = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background: #f2f2f2;
  font-size: 1.5rem;
  &:hover {
    background: #dedede;
  }
`;

export { Container, Wrapper, FolderTitleWrapper, BtnAddTodo };
