import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #151d3b;
  color: whitesmoke;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;
const MenuWrapper = styled.div`
  display: flex;
`;
const MenuBtn = styled.button`
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
  position: relative;
`;
const DropDownContent = styled.div<IDropdownMenu>`
  cursor: pointer;
  z-index: 100;
  position: absolute;
  right: 0.5rem;
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
  &:nth-last-child(1) {
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
  MenuBtn,
  Title,
  SubTitle,
  HeaderBtn,
  DropDownWrapper,
  DropDownContent,
  DropDownItem,
};
