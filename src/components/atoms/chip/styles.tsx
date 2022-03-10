import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-flex;
  width: 5vw;
  border: 1px solid;
  border-radius: 0.4rem;
  align-items: center;
  padding: 0.6vw 1.2vw;
  p {
    margin: 0%;
    font-size: 0.8rem;
  }
`;

const HashtagContainer = styled.div`
  border: 1px solid green;
  padding: 0.2vw;
  border-radius: 2vw;
`;

export { Container, HashtagContainer };
