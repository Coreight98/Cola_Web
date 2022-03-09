import styled from '@emotion/styled';

export interface SideBarTheme {
  sideBarWidth?: number;
  isSideBarOpen?: boolean;
}

const SimpleContainer = styled.div<SideBarTheme>`
  width: 70px;
  padding: 20px;
  display: block;
  height: calc(100vh - 80px);
  background-color: whitesmoke;
  position: fixed;
  z-index: ${(props) => (props.isSideBarOpen ? '0' : '100')};
  transition-delay: ${(props) => (props.isSideBarOpen ? '0' : '.3s')};
  box-shadow: 2px 0px 4px 0px #7a7a7a32;
  div {
    justify-content: center;
  }
`;
const Container = styled.div<SideBarTheme>`
  width: 200px;
  display: block;
  height: calc(100vh - 80px);
  background-color: whitesmoke;
  padding: 20px;
  position: fixed;
  left: ${(props) => (props.isSideBarOpen ? '0' : '-130px')};
  transition: 0.3s ease-in-out;
  z-index: ${(props) => (props.isSideBarOpen ? '100' : '0')};
  box-shadow: 2px 0px 4px 0px #00000033;
`;
const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
const Username = styled.p<SideBarTheme>`
  padding: 0 0.5rem;
  font-size: 18px;
  font-weight: 600;
  overflow-x: hidden;
`;
const SingInText = styled.p`
  padding: 0.5 0rem;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #666666;
  }
`;
const CategoryTitle = styled.div<SideBarTheme>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: 1rem 0;
  overflow-x: hidden;
  span {
    font-weight: 600;
    font-size: 20px;
  }
`;
const CategoryItem = styled.p<SideBarTheme>`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  /* transition: 0.5s ease-in-out; */
  &:hover {
    color: #151d3b;
  }
`;

export { SimpleContainer, Container, ProfileWrapper, Username, SingInText, CategoryTitle, CategoryItem };
