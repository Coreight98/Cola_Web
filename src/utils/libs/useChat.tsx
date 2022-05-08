import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Socket } from 'socket.io-client';

import useInput, { UseInputProps } from './useInput';

import { IUser, IChat, IUsers } from '~/types/gather';

type UseChatProps = [
  ...UseInputProps,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
  IChat[],
  Dispatch<SetStateAction<IChat[]>>,
];
export default function useChat(socket: Socket, user: IUser): UseChatProps {
  const [chatInput, setChatInput, onChangeChatInput] = useInput('');
  const [chatList, setChatList] = useState<IChat[]>([]);

  useEffect(() => {
    socket.on('receive-chat', (chat: IChat) => {
      setChatList((prev) => [...prev, chat]);
    });
  }, []);

  const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newChat: IChat = {
        text: chatInput,
        name: user.name,
        cId: user.cId,
        date: Date.now(),
        id: Math.random().toString(32).substring(2, 11),
      };
      socket.emit('send-chat', newChat);
      setChatList((prev) => [...prev, newChat]);
      setChatInput('');
    }
  };

  return [chatInput, setChatInput, onChangeChatInput, onKeyPressEnter, chatList, setChatList];
}
