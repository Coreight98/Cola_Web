import { useState } from 'react';

import type { NextPage } from 'next';

import Card from '@components/atoms/card';
import Modal from '@components/molecules/modal';
import PostContent from '@components/molecules/postContent';
import { Container, Title, CardContainer, ContentContainer, BackgroundImage } from '@styles/mypage';

const data = {
  name: '김이름',
  department: '소프트웨어학과',
  ajouEmail: 'maxcha98@ajou.ac.kr',
  githubEmail: 'maxcha98@naver.com',
};

const Mypage: NextPage = () => {
  const [modalOnOff, setModalOnOff] = useState(false);

  const handleModalOnOff = () => setModalOnOff(!modalOnOff);
  return (
    <>
      <Container>
        <Title>마이페이지</Title>
        <CardContainer>
          <BackgroundImage>
            <pre>{`캐릭터가\n명함을 쥐고\n매달려 있는 느낌`}</pre>
          </BackgroundImage>
          <Card {...data} handleModalOnOff={handleModalOnOff} />
        </CardContainer>
        <ContentContainer>
          <PostContent
            title="내가 쓴 게시글"
            postData={[
              { title: '제목', kind: '00게시판', date: new Date() },
              { title: '제목', kind: '00게시판', date: new Date() },
              { title: '제목', kind: '00게시판', date: new Date() },
            ]}
          />
          <PostContent
            title="내가 쓴 댓글"
            postData={[
              { title: '제목', kind: '00게시판', date: new Date() },
              { title: '제목', kind: '00게시판', date: new Date() },
              { title: '제목', kind: '00게시판', date: new Date() },
            ]}
          />
          <PostContent
            title="내가 쓴 좋아요한 게시글"
            postData={[
              { title: '제목', kind: '00게시판', date: new Date() },
              { title: '제목', kind: '00게시판', date: new Date() },
              { title: '제목', kind: '00게시판', date: new Date() },
            ]}
          />
        </ContentContainer>
      </Container>
      {modalOnOff && (
        <Modal onClick={handleModalOnOff}>
          <div>
            <button>정보수정</button>
            <button>회원탈퇴</button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Mypage;
