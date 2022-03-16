import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  margin: 0.2rem;
`;

const HeaderBtn = styled.button`
  background: none;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  color: whitesmoke;
  cursor: pointer;
`;

const InputModal = styled.div`
  position: absolute;
  border: none;
  box-shadow: 0px 0px 10px #00000029;
  width: 300px;
  min-height: 20vh;
  background-color: white;
`;

const HashtagWrapper = styled.div`
  display: flex;
  overflow: auto;
`;
export { Container, HeaderBtn, InputModal, HashtagWrapper };
