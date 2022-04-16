import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Container = styled.div`
  width: 100vw;
  height: 5rem;
  padding: 50px 20px 50px 53px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background['100']};
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
  gap: 2rem;
`;
const MenuWrapper = styled.div`
  display: flex;
`;
const MenuBtn = styled.span`
  border: none;
  background: none;
  padding: 0 1rem;
  cursor: pointer;
`;
const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  cursor: pointer;
  padding: 0px 10px;
`;
const SubTitle = styled.span`
  font-size: 14px;
  padding: 0px 10px;
`;
const HeaderBtn = styled.button`
  background: none;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  color: whitesmoke;
  cursor: pointer;
`;

export interface IDropdownMenu {
  isOpen: boolean;
}
const DropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;
const DropDownContent = styled.div<IDropdownMenu>`
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 4.5rem;
  right: 1rem;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 10rem;
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background: #f3f5f7;
  color: #242424;
  /* transition: all 300ms linear; */
`;
const DropDownItem = styled.span`
  width: 100%;
  padding: 0.5rem 0;
  text-align: center;
  border-bottom: 1px solid #929292;
  &:nth-last-of-type(1) {
    border-bottom: 0px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export {
  Container,
  TitleWrapper,
  MenuWrapper,
  Title,
  SubTitle,
  HeaderBtn,
  DropDownWrapper,
  DropDownContent,
  DropDownItem,
};
