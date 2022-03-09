import styled from '@emotion/styled';

export interface HashtagChipInterface {
  size?: string;
}
const Container = styled.div<HashtagChipInterface>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: ${(props) => (props.size === 'full' ? 70 : 30)}px;
  border-radius: 15px;
  background-color: #4b48e7;
  opacity: 0.9;
  transition: 0.1s;
  padding: 0 5px 0 10px;
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    background-color: #5f5cec;
  }
  & > button {
    display: ${(props) => (props.size === 'full' ? 'block' : 'none')};
  }
`;
const RemoveBtn = styled.button`
  /* border: 0; */
  background: none;
  border-radius: 100%;
  transition: 0.1s;
  color: whitesmoke;
  cursor: pointer;
  &:hover {
    background-color: #282f91;
    opacity: 0.8;
  }
`;
export { Container, RemoveBtn };
