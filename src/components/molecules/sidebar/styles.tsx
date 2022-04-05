import styled from '@emotion/styled';

const Container = styled.nav`
  position: absolute;
  padding-top: 3rem;
  top: 1.5rem;
  bottom: 0;
  left: 0;
  width: 54px;
  height: 54px;
  /* width: 250px;
  height: calc(100vh - 3rem); */
  border-radius: 0px 30px 30px 0px;
  background-color: ${(props) => props.theme.colors.VeryLightBlue};
  overflow: hidden;
  z-index: 1000;
  color: #222;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  transition: all 100ms;
  &:hover {
    width: 250px;
    height: calc(100vh - 3rem);
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 141px;
  height: 38px;
  border-radius: 19px;
  background-color: ${(props) => props.theme.colors.White};
  h3 {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;
const ListWrapper = styled.ul`
  outline: 0;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;
const ListItem = styled.li`
  list-style: none;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 100ms ease-in-out;
  position: relative;

  &:hover > .cross-line {
    position: absolute;
    width: 250px;
    height: 1px;
    background: #8693ff;

    .circle-wrapper {
      background-color: ${(props) => props.theme.colors.primaryColor};
      width: 22px;
      height: 22px;
      z-index: 1001;
    }
    .half-circle {
      position: absolute;
      left: -11px;
      top: -11px;
      width: 22px;
      height: 22px;
      padding: 0 10px;
      border-radius: 100%;
      background: #8693ff;
    }
  }

  a {
    position: relative;
    z-index: 1001;
    background-color: ${(props) => props.theme.colors.primaryColor};
    span {
      vertical-align: middle;
      padding: 0 10px;
      color: ${(props) => props.theme.colors.White};
      letter-spacing: 0px;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export { Container, Section, ListWrapper, ListItem, MenuWrapper };
