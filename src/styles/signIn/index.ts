import styled from '@emotion/styled';

const Container = styled.div`
  text-align: -webkit-center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Header = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  align-self: center;
  color: ${({ theme }) => theme.colors.blue[500]};
`;

const AuthContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 50%;
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
export { Container, Header, AuthContentWrapper, SocialLogin, RouterText };
