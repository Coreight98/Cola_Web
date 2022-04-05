import styled from '@emotion/styled';

export interface HashtagChipInterface {
  size?: 'full' | 'small';
}
const Container = styled.div<HashtagChipInterface>`
  position: relative;
  display: flex;
  justify-content: ${({ size }) => (size === 'full' ? 'space-between' : 'space-around')};
  align-items: center;
  height: 30px;
  width: 140px;
  min-width: ${({ size }) => (size === 'full' ? '100%' : '4vw')};
  border-radius: 5px 0px 0px 5px;
  background: ${(props) => props.theme.colors.primaryLightColor};
  opacity: 0.9;
  transition: 0.1s;
  padding: 0 5px 0 10px;
  margin: 0.2rem 0;
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
  &:hover > button {
    visibility: visible;
  }
`;
const RemoveBtn = styled.button`
  position: absolute;
  right: -30px;
  cursor: pointer;
  border: none;
  visibility: hidden;
  width: 30px;
  height: 30px;
  border-radius: 0px 5px 5px 0px;
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.primaryColor};
  transition: 0.1s;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryColor};
    color: ${(props) => props.theme.colors.White};
  }
`;
export { Container, RemoveBtn };
