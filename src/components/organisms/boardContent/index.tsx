import styled from '@emotion/styled';

import Logo from '@assets/icon/logo.svg';
import HashtagChip from '@atoms/hashtagChip';
import UserDefault from '@components/atoms/icon/userDefault';
import { theme } from '@styles/theme';
import Comment from 'public/comment.svg';
import CommentBig from 'public/comment_Big.svg';
import Heart from 'public/heart.svg';
import HeartBig from 'public/heart_Big.svg';
import LeftArrow from 'public/left_arrow.svg';
import RightArrow from 'public/right_arrow.svg';
import Visit from 'public/visit.svg';

const Container = styled.div`
  border-radius: 24px;
  box-shadow: 0px 0px 6px ${theme.colors.shadow};
`;

const Header = styled.h2`
  width: 1200px;
  height: 151px;
  padding: calc((151px - 3rem) / 2 - 0.5rem);
  padding-bottom: 0;
  outline: none;
  align-items: center;
  font-size: 3rem;
  color: ${theme.colors.white};
  background-image: url('/header.png');
  background-position: center;
  background-size: cover;
  text-align: center;
`;

const Content = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const ContentDetail = styled.div`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 1.1rem;
  gap: 1rem;
`;
const ContentDetailRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue[400]};
  &:nth-last-of-type(1) {
    border: none;
  }
`;
const DetailInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  font-size: 1.1rem;
  font-weight: medium;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.blue[500]};
  font-size: 43px;
  letter-spacing: 0;
  margin: 0;
  font-weight: 500;
`;

const TextArea = styled.div`
  border: 10px;
  min-height: 80vh;
  box-shadow: inset 0px 0px 6px ${theme.colors.shadow};
`;

const HashTagBarStyle = styled.div`
  background: ${theme.colors.blue[500]};
  align-items: center;
  min-height: 6vh;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-x: scroll;
  div {
    width: 80%;
    column-gap: 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
  }
`;

interface Props {
  content: string;
}

const HashTagBar = ({ data }: { data: string[] }) => {
  return (
    <HashTagBarStyle>
      <LeftArrow />
      <div>
        {data.map((tag, idx) => (
          <HashtagChip key={idx} title={tag} size="small" />
        ))}
      </div>
      <RightArrow />
    </HashTagBarStyle>
  );
};

const BoardContent = ({ content }: Props) => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Content>
        <div>
          <Title>{content}</Title>
          <ContentDetail>
            <ContentDetailRow>
              <span>2022월04월18일</span>
              <DetailInfoWrapper>
                <Heart />
                <span>100</span>
                <Comment />
                <span>100</span>
                <Visit />
                <span>100</span>
              </DetailInfoWrapper>
            </ContentDetailRow>
            <ContentDetailRow>
              <DetailInfoWrapper>
                <UserDefault />
                <span>작성자 이름</span>
              </DetailInfoWrapper>
              <DetailInfoWrapper>
                <HeartBig />
                <CommentBig />
              </DetailInfoWrapper>
            </ContentDetailRow>
          </ContentDetail>
        </div>
        <TextArea></TextArea>
        <HashTagBar
          data={[
            'java',
            'javascript',
            'python',
            'C',
            'C#',
            'C++',
            'Go',
            'ruby',
            'javascript',
            'python',
            'C',
            'C#',
            'C++',
            'Go',
            'ruby',
          ]}
        />
      </Content>
    </Container>
  );
};

export default BoardContent;
