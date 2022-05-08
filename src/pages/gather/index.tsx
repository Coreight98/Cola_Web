import { useState, useEffect, useRef } from 'react';

import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Button from '@components/atoms/button/submit';
import Input from '@components/atoms/input';
import socket from '@store/gatherSocket';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const Container = styled(FlexColumn)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

interface IUser {
  name: string;
  enrollmentDate: number;
  x: number;
  y: number;
  direction: string;
  state?: string;
}

const Gather: NextPage = () => {
  // const socket = useSocket('http://localhost:4000');
  const usernameRef = useRef('');
  const [user, setUser] = useState<IUser>();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      console.log('소켓 연결됨');
    });
    socket.on('set-user', (user: IUser) => {
      console.log('유저 생성 됨');
      setUser(user);
    });
    socket.on('get-users', (users: IUser[]) => {
      console.log('유저 목록 불러오기');
      setUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmitName = () => {
    console.log(usernameRef.current);
    socket.emit('set-user', { username: usernameRef.current });
  };

  return (
    <Container>
      <h2>Ajou Mogakco에 오신 것을 환영합니다</h2>
      <FlexColumn>
        <Input
          placeholder="AjouGather에서 사용하실 이름을 입력해주세요."
          onChange={(e) => {
            const {
              currentTarget: { value },
            } = e;
            usernameRef.current = value;
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmitName();
            }
          }}
        />
        <Button size="small" onClick={handleSubmitName}>
          확인
        </Button>
      </FlexColumn>

      {users.length > 0 && user && <FlexColumn>입장 완료</FlexColumn>}
      {users.length === 0 && !user && <FlexColumn>입장해주세요</FlexColumn>}
    </Container>
  );
};
export default Gather;
