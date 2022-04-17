import styled from '@emotion/styled';

import UserIcon from '@assets/icon/userDefault.svg';

interface IIconWrapperProps {
  width?: string;
  height?: string;
}
const IconWrapper = styled.div<IIconWrapperProps>`
  background-color: ${(props) => props.theme.colors.blue[500]};
  width: ${({ width }) => (width ? width : '53px')};
  height: ${({ height }) => (height ? height : '53px')};
  border-radius: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  svg {
    // width: 80%;
    // height: 80%;
  }
`;

const UserDefault = ({ width, height }: IIconWrapperProps) => {
  return (
    <IconWrapper width={width} height={height}>
      <UserIcon />
    </IconWrapper>
  );
};
export default UserDefault;
