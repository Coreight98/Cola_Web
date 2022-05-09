import styled from '@emotion/styled';
interface IStatus {
  status: 'prev' | 'this' | 'today';
}

const Container = styled.div<IStatus>`
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${({ status }) => (status === 'prev' ? 'hidden' : 'visible')};
`;

const Box = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid;
`;

const DayText = styled.p<IStatus>`
  ${({ status, theme: { colors } }) => `
    background-color:${status === 'today' ? colors.blue[500] : ''};
    color:${status === 'today' ? 'white' : colors.gray[900]};
    border-radius:4px;
    padding: 0.1rem .4rem;
    font-size:1rem;
    font-weight:500;
  `}
`;

export { Container, Box, DayText };
