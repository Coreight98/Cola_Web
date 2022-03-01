import styled from '@emotion/styled';

const Container = styled.div`
  text-align: -webkit-center;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template:
    '. Title .' 1fr
    '. Form .' 1fr
    '. . .' 6fr
    /2fr 1fr 2fr;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;
const Header = styled.h1`
  grid-area: Title;
  font-size: 32px;
  font-weight: 600;
  padding: 14px;
  align-self: center;
`;
const FormWrapper = styled.form`
  grid-area: Form;
  width: 300px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  button {
    /* width: 10vw; */
    padding: 10px 5vh;
    background: #2d31fa;
    color: white;
    border: none;
    border-radius: 20px;
    transition: 0.4s;
    &:hover {
      cursor: pointer;
      background-color: #5d8bf4;
    }
    &:active {
      background-color: #2d31fa;
    }
  }
  input {
    width: 250px;
    height: 40px;
    padding: 5px;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  text-align: start;
  padding: 5px 0;
`;
export { Container, Header, FormWrapper, ErrorMessage };
