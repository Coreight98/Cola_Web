import styled from '@emotion/styled';

import Up from 'public/up.svg';

const PositionContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 40px;
  z-index: 999;

  @media screen and (min-width: 480px) {
    right: 5%;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background-color: transparent;
  svg {
    opacity: 0.8;
    height: 70px;
    rent {
      fill: var(--color-body);
    }
    line {
      fill: none;
      stroke: var(--color-text);
      opacity: 1;
    }
  }
`;

const handleScroll = () => {
  if (typeof window === undefined) return;
  if (window.scrollY < 100) return;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const TopButton = () => {
  return (
    <PositionContainer>
      <Button onClick={handleScroll}>
        <Up type="arrow" height="40px" />
      </Button>
    </PositionContainer>
  );
};

export default TopButton;
