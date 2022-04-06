import styled from '@emotion/styled';

export interface HashtagChipInterface {
  size?: 'full' | 'sidebar' | 'small';
}
const Container = styled.div<HashtagChipInterface>`
  position: relative;
  display: flex;
  justify-content: ${({ size }) => (size === 'full' ? 'space-between' : 'space-between')};
  align-items: center;
  height: 30px;
  width: ${(props) => (props.size === 'sidebar' ? '140px;' : '')};
  min-width: ${({ size }) => (size === 'full' ? '100%' : '4vw')};
  border-radius: 5px;
  background: ${(props) => props.theme.colors.primaryLightColor};
  opacity: 0.9;
  transition: 0.1s;
  padding: ${(props) => (props.size === 'sidebar' ? '0 5px 0 10px' : '0 0 0  1rem')};
  margin: 0.2rem 0;
  gap: ${(props) => (props.size === 'small' ? '1rem' : '')};
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
  &:hover > button {
    visibility: visible;
  }
`;
const RemoveBtn = styled.button<HashtagChipInterface>`
  position: ${(props) => (props.size === 'sidebar' ? 'absolute' : 'initial')};
  right: ${(props) => (props.size === 'sidebar' ? '-30px;' : '')};
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
