import styled from '@emotion/styled';

import UserIcon from '@assets/icon/userDefault.svg';

const IconWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.blue[500]};
  width: 53px;
  height: 53px;
  border-radius: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const UserDefault = () => {
  return (
    <IconWrapper>
      <UserIcon />
    </IconWrapper>
  );
};
export default UserDefault;
