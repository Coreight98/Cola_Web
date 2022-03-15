import styled from '@emotion/styled';

const Container = styled.nav`
  position: absolute;
  top: 5rem;
  bottom: 0;
  left: 0;
  height: calc(100vh - 5rem);
  width: 80px;
  overflow: hidden;
  z-index: 1000;
  background-color: #f5f5f5;
  color: #222;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  transition: all 150ms ease-in-out;
  &:hover {
    width: 260px;
  }
`;
const ListWrapper = styled.ul`
  outline: 0;
  margin: 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ListItem = styled.li`
  outline: 0;
  margin: 0;
  padding: 0 10px;
  width: 260px;
  display: flex;
  align-items: center;
  transition: all 100ms ease-in-out;
  &:hover {
    color: #fefefe;
    background: #dcdcdc;
  }
  a {
    position: relative;
    display: table;
    i {
      width: 20px;
      padding: 0 10px;
      position: relative;
      display: table-cell;
      width: 60px;
      height: 48px;
      text-align: center;
      vertical-align: middle;
      font-size: 20px;
    }
    span {
      display: table-cell;
      vertical-align: middle;
      width: 180px;
      padding: 0 10px;
    }
  }
`;

export { Container, ListWrapper, ListItem };
