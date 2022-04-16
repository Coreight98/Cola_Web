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
  max-width: 7vw;
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.shadow};
  width: ${(props) => (props.size === 'sidebar' ? '140px;' : '')};
  border-radius: 19px;
  color: ${(props) => props.theme.colors.blue[500]};
  opacity: 0.9;
  padding: ${(props) => (props.size === 'sidebar' ? '0 5px 0 10px' : '0 1rem')};
  margin: 0.2rem 0;
  gap: ${(props) => (props.size === 'small' ? '1rem' : '')};
  background: whitesmoke;
  white-space: nowrap;
  cursor: pointer;
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    span {
      margin-right: 0.3rem;
    }
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.blue[500]};
  }
  &:hover > button {
    visibility: visible;
  }
`;

const SideBarRemoveBtn = styled.button<HashtagChipInterface>`
  position: ${(props) => (props.size === 'sidebar' ? 'absolute' : 'initial')};
  right: ${(props) => (props.size === 'sidebar' ? '-30px;' : '')};
  cursor: pointer;
  border: none;
  visibility: hidden;
  width: 30px;
  height: 30px;
  border-radius: 0px 5px 5px 0px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  transition: 0.1s;
  &:hover {
    background-color: ${(props) => props.theme.colors.blue[500]};
    color: ${(props) => props.theme.colors.white};
  }
`;

const RemoveBtn = styled.button<HashtagChipInterface>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 19px;
  visibility: hidden;
  height: 100%;
  background-color: ${(props) => props.theme.colors.blue[500]};
  color: ${(props) => props.theme.colors.white};
`;

export { Container, SideBarRemoveBtn, RemoveBtn };
