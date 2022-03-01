import styled from '@emotion/styled';

const Container = styled.div`
  text-align: -webkit-center;
  width: 100vw;
  height: calc(100vh - 70px);
  display: grid;
  grid-template:
    '. Title .' 1fr
    '. Form .' 1fr
    '. Auth .' 6fr
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
  p {
    color: red;
    text-align: start;
    padding: 5px 0;
  }
  button {
    /* width: 10vw; */
    padding: 10px 5vh;
    background: #151d3b;
    color: white;
    border: none;
    border-radius: 20px;
    transition: 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: #084594;
    }
    &:active {
      background-color: #151d3b;
    }
  }
  input {
    width: 250px;
    height: 40px;
    padding: 5px;
  }
`;
const AuthContentWrapper = styled.div`
  grid-area: Auth;
  width: 300px;
  padding: 10px 0;

  p {
    color: #222;
    font-size: 14px;
  }
`;

const SocialLogin = styled.div`
  width: 100%;
  p {
    font-size: 16px;
    font-weight: 600;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
    }
  }
`;

const RouterText = styled.span`
  cursor: pointer;
`;
export { Container, Header, FormWrapper, AuthContentWrapper, SocialLogin, RouterText };
