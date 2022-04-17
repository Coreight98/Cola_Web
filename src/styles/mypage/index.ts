import styled from '@emotion/styled';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexColumn)`
  width: 600px;
`;
const ProfileSection = styled(FlexRow)`
  margin: 20px 0;
  height: 200px;
  gap: 1rem;
  border-bottom: 1px solid #e5e5e5;
`;
const ProfileImage = styled.div`
  height: 150px;
  width: 150px;
  background: #e5e5e5;
  border-radius: 100%;
`;
const ProfileDetailWrapper = styled(FlexColumn)`
  flex: 1;
  background-color: #e5e5e5;
  padding: 5px 20px;
  h4 {
    font-size: 20px;
    margin: 10px 0;
  }
`;
const ProfileDetail = styled.div`
  padding: 10px 0;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const MypageSection = styled.div`
  margin-bottom: 3rem;
`;

const ContentWrapper = styled(FlexColumn)`
  padding: 10px;
  background: #e5e5e5;
`;
export {
  Container,
  FlexRow,
  ProfileSection,
  ProfileImage,
  ProfileDetailWrapper,
  ProfileDetail,
  MypageSection,
  ContentWrapper,
};
