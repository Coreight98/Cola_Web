import {
  Container,
  FlexRow,
  ProfileSection,
  ProfileImage,
  ProfileDetailWrapper,
  ProfileDetail,
  MypageSection,
  ContentWrapper,
} from './styles';

const Mypage = () => {
  return (
    <Container>
      <ProfileSection>
        <ProfileImage></ProfileImage>
        <ProfileDetailWrapper>
          <h4>프로필</h4>
          <ProfileDetail>
            <div>
              <span>이름 : 아주인</span>
              <span>
                소프트웨어학과<span style={{ marginLeft: 10 }}>icon</span>
              </span>
            </div>
            <p>아주대 메일</p>
            <p>Github : github@git.co</p>
          </ProfileDetail>
        </ProfileDetailWrapper>
      </ProfileSection>
      <MypageSection>
        <FlexRow>
          <h3>내가 쓴 게시물</h3>
          <span>더보기 +</span>
        </FlexRow>
        <ContentWrapper>
          <li>게시글 1</li>
          <li>게시글 1</li>
          <li>게시글 1</li>
          <li>게시글 1</li>
        </ContentWrapper>
      </MypageSection>
      <MypageSection>
        <FlexRow>
          <h3>내가 쓴 댓글</h3>
          <span>더보기 +</span>
        </FlexRow>
        <ContentWrapper>
          <li>댓글 1</li>
          <li>댓글 2</li>
          <li>댓글 3</li>
          <li>댓글 4</li>
          <li>댓글 5</li>
        </ContentWrapper>
      </MypageSection>
      <MypageSection>
        <FlexRow>
          <h3>내가 좋아하는 게시물</h3>
          <span>더보기 +</span>
        </FlexRow>
        <ContentWrapper>
          <li>게시글 1</li>
          <li>게시글 1</li>
          <li>게시글 1</li>
          <li>게시글 1</li>
          <li>게시글 1</li>
        </ContentWrapper>
      </MypageSection>
    </Container>
  );
};
export default Mypage;
