import styled from '@emotion/styled';

export interface SideBarTheme {
  sideBarWidth?: number;
  isSideBarOpen?: boolean;
}
const Container = styled.div<SideBarTheme>`
  width: ${(props) => props.sideBarWidth}px;
  display: block;
  height: calc(100vh - 80px);
  background-color: whitesmoke;
  padding: 20px;
  position: fixed;
  left: 0;
  transform: width;
  transition: 0.1s ease-out;
`;
const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
`;
const Username = styled.p<SideBarTheme>`
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  & span {
    display: ${(props) => (props.isSideBarOpen ? 'inline' : 'none')};
  }
`;
const CategoryTitle = styled.h1<SideBarTheme>`
  font-size: ${(props) => (props.isSideBarOpen ? 20 : 0)}px;
  font-weight: 600;
`;
const CategoryItem = styled.p<SideBarTheme>`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #151d3b;
  }
  span {
    display: ${(props) => (props.isSideBarOpen ? 'inline' : 'none')};
  }
`;

export { Container, ProfileWrapper, Username, CategoryTitle, CategoryItem };
