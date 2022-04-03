import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 527px;
  height: 53px;
  border-radius: 28px;
  box-shadow: 0px 0px 6px #00000029;
  background: ${(props) => props.theme.colors.White};
`;

const HeaderBtn = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: whitesmoke;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
`;

const InputModal = styled.div`
  position: absolute;
  border: none;
  box-shadow: 1px 4px 4px 0px #00000029;
  width: calc(100% - 94px);
  left: 20px;
  min-height: 20vh;
  background-color: white;
`;

const HashtagWrapper = styled.div`
  display: flex;
  overflow: auto;
`;
export { Container, HeaderBtn, InputModal, HashtagWrapper };
