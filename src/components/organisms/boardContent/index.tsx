import styled from '@emotion/styled';

import HashtagChip from '@atoms/hashtagChip';

import Heart from 'public/heart.svg';
import HeartBig from 'public/heart_Big.svg';
import Visit from 'public/visit.svg';
import Comment from 'public/comment.svg';
import CommentBig from 'public/comment_Big.svg';
import LeftArrow from 'public/left_arrow.svg';
import RightArrow from 'public/right_arrow.svg';

import { theme } from '@styles/theme';
import UserDefault from '@components/atoms/icon/userDefault';

const Container = styled.div`
  border-radius: 24px;
  box-shadow: 0px 0px 6px ${theme.colors.shadow};
`;

const Header = styled.h2`
  width: 1200px;
  height: 151px;
  padding: calc((151px - 3rem) / 2 - 0.5rem);
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Title = styled.h3``;

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
        {data.map((tag) => (
          <HashtagChip title={tag} size="small" />
        ))}
      </div>
      <RightArrow />
    </HashTagBarStyle>
  );
};

const BoardContent = ({ content }: Props) => {
  return (
    <Container>
      <Header>Cola</Header>
      <Content>
        <div style={{ padding: '3rem' }}>
          <Title>{content}</Title>
          <div
            style={{
              width: '100%',
              display: 'flex',
              borderBottom: '1px solid',
              justifyContent: 'space-between',
            }}
          >
            <p>2022월04월18일</p>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '.5rem' }}>
              <Heart />
              <p>100</p>
              <Comment />
              <p>100</p>
              <Visit />
              <p>100</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', columnGap: '1rem' }}>
              <UserDefault />
              <p>작성자 이름</p>
            </div>
            <div style={{ display: 'flex', columnGap: '1rem' }}>
              <HeartBig />
              <CommentBig />
            </div>
          </div>
        </div>
        <TextArea></TextArea>
        <HashTagBar data={['java', 'javascript', 'python', 'C', 'C#', 'C++', 'Go', 'ruby']} />
      </Content>
    </Container>
  );
};

export default BoardContent;
