import styled from '@emotion/styled';

export interface SideBarTheme {
  sideBarWidth: number;
}
const Container = styled.div<SideBarTheme>`
  width: ${(props) => props.sideBarWidth}px;
  display: ${(props) => (props.sideBarWidth === 0 ? 'none' : 'block')};
  height: calc(100vh - 80px);
  background-color: whitesmoke;
  padding: 20px;
  position: fixed;
  left: 0;
`;
const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
`;
const Username = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
const CategoryTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const CategoryItem = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #151d3b;
  }
`;

export { Container, ProfileWrapper, Username, CategoryTitle, CategoryItem };
