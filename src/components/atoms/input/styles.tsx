import styled from '@emotion/styled';

interface Props {
  width: string | number;
  height: string | number;
}
const InputStyle = styled.input<Props>`
  box-shadow: 0px 0px 5px #00000029;
  border: none;
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  &:focus {
    outline-color: ${(props) => props.theme.colors.VeryLightBlue};
    outline-width: 1px;
  }
`;
export { InputStyle };
