import { useState, useEffect, useRef } from 'react';

import type { NextPage } from 'next';

import Button from '@components/atoms/button/submit';
import Input from '@components/atoms/input';
import socket from '@store/gatherSocket';
import { FlexColumn, Container } from '@styles/gather';
import useChat from '@utils/libs/useChat';
import useInput from '@utils/libs/useInput';
import { IUser, IChat, IUsers } from '~/types/gather';

const Gather: NextPage = () => {
  const usernameRef = useRef('');
  const [user, setUser] = useState<IUser>();
  const [users, setUsers] = useState<IUsers>([]);
  const [chatInput, setChatInput, onChangeChatInput, onKeyPressEnter, chatList, setChatList] = useChat(
    socket,
    user as IUser,
  );

  useEffect(() => {
    socket.on('connect', () => {
      console.log('소켓 연결됨', socket.id);
    });

    socket.on('set-user', (user: IUser) => {
      console.log('유저 생성 됨', user);
      setUser(user);
    });
    socket.on('users-changed', (users: IUsers) => {
      setUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmitName = () => {
    socket.emit('join-room', usernameRef.current);
  };

  return (
    <Container>
      <h2>Ajou Mogakco에 오신 것을 환영합니다</h2>
      <FlexColumn>
        <Input
          placeholder="AjouGather에서 사용하실 이름을 입력해주세요."
          onChange={({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
            usernameRef.current = value;
          }}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
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

      {users && user?.cId && (
        <FlexColumn>
          <h3>유저 목록</h3>
          <div>
            {Object.values(users).map((roomUser: IUser) => (
              <span
                style={{ padding: '1rem', color: user.cId === roomUser.cId ? 'green' : 'black' }}
                key={roomUser.cId}
              >
                {roomUser.name}
              </span>
            ))}
          </div>
          <div>
            <h3>채팅</h3>
            <Input type="text" value={chatInput} onKeyPress={onKeyPressEnter} onChange={onChangeChatInput} />
            <div>
              {chatList.map((chat) => (
                <p key={chat.id}>
                  {chat.text} - by {chat.name}
                </p>
              ))}
            </div>
          </div>
        </FlexColumn>
      )}
      {!user?.cId && <FlexColumn>입장해주세요</FlexColumn>}
    </Container>
  );
};
export default Gather;
