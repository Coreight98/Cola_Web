import styled from '@emotion/styled';

export interface SidebarProps {
  sidebar: boolean | undefined;
}

const Container = styled.div`
  position: fixed;
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  width: 12rem;
  display: flex;
`;
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  align-items: center;
  background: whitesmoke;
`;
const SidebarIconContainer = styled(SidebarContainer)`
  width: 4rem;
`;
const SidebarTextContainer = styled(SidebarContainer)<SidebarProps>`
  display: ${(props) => (props.sidebar ? 'flex' : 'none')};
  transition: 200ms all;
  width: ${(props) => (props.sidebar ? '8rem' : '0')};
  box-shadow: 2px 4px 1px 0px rgb(212 211 211 / 80%);
  position: relative;
`;

const SidebarItem = styled.span`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const ProfileWrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100%;
  }
`;
const CategoryItem = styled(SidebarItem)`
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  margin: 0;
`;

export {
  Container,
  SidebarIconContainer,
  SidebarTextContainer,
  ProfileWrapper,
  CategoryWrapper,
  SidebarItem,
  CategoryItem,
};
