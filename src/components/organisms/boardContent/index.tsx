import {
  Container,
  Header,
  Content,
  ContentDetail,
  ContentDetailRow,
  DetailInfoWrapper,
  Title,
  TextArea,
  HashTagBarStyle,
} from './styles';

import Logo from '@assets/icon/logo.svg';
import HashtagChip from '@atoms/hashtagChip';
import UserDefault from '@components/atoms/icon/userDefault';
import Comment from 'public/comment.svg';
import CommentBig from 'public/comment_Big.svg';
import Heart from 'public/heart.svg';
import HeartBig from 'public/heart_Big.svg';
import LeftArrow from 'public/left_arrow.svg';
import RightArrow from 'public/right_arrow.svg';
import Visit from 'public/visit.svg';

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
