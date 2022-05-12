import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import socket from '@store/gatherSocket';

import { IUser, IUsers } from '~/types/gather';
import defaultUserSetting from '@utils/libs/defaultUserSetting';
import defaultMapSetting from '@utils/libs/defaultMapSetting';
import keyboardEvent from '@utils/libs/keyboardEvent';
import { Container, LeftbarContainer } from '@styles/gather/map';
import Background from '@components/organisms/background';
import Character from '@components/organisms/character';
import ChattingBar from '@components/organisms/chattingBar';

const GatherMap = () => {
  const router = useRouter();
  const { id: code, name } = router.query;
  const [user, setUser] = useState<IUser>(defaultUserSetting as IUser);
  const [users, setUsers] = useState<IUsers>({});

  const defaultCharacterPosition = defaultMapSetting[0].character;
  const defaultBackgroundPosition = defaultMapSetting[0].background;

  const left = defaultBackgroundPosition.left + defaultCharacterPosition.x - user.x;
  const top = defaultBackgroundPosition.top + defaultCharacterPosition.y - user.y;

  const [move, setMove] = useState(false);

  const [marginBackground, setMarginBackground] = useState({ top, left });
  const [tempBackground, setTempBackground] = useState({ top, left });
  const [background, setBackground] = useState({ top, left });

  useEffect(() => {
    const handleMove = document;

    socket.emit('JOIN_ROOM', { name, id: socket.id, cId: 0 }, code, (userData: IUser) => setUser(userData));
    socket.on('makeRoomClient', (code: string, RoomUser: any) => setUsers(RoomUser));

    handleMove.addEventListener('keydown', (event) => {
      if (Object.keys(keyboardEvent.direction).includes(event.code)) {
        setTempBackground((v) =>
          keyboardEvent.direction[event.code as keyof typeof keyboardEvent.direction].background.call(v),
        );
        setUser(
          (v) => keyboardEvent.direction[event.code as keyof typeof keyboardEvent.direction].character.call(v) as IUser,
        );
      }
    });

    handleMove.addEventListener('keyup', () => setUser((v) => ({ ...v, state: 'mid' })));

    socket.on('changeMove', (list, temp) => {
      setUsers(list);
      if (temp !== null)
        (function () {
          setBackground((v) => temp ?? v);
          setMove(false);
        })();
      else setMove(true);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.emit('CHARACTER_MOVE', { user, room: code, tempBackground });
  }, [user]);

  useEffect(() => {
    if (tempBackground.top === background.top && tempBackground.left === background.left)
      setMarginBackground((v) => ({ top: background.top, left: background.left }));
  }, [background, tempBackground]);

  return (
    <Container>
      <LeftbarContainer>
        <ChattingBar user={user} users={users} />
      </LeftbarContainer>
      <Background marginBackground={marginBackground} />
      {Object.keys(users).map((element) => (
        <Character
          key={element}
          user={users[element]}
          margin={element !== user.name ? marginBackground : move ? marginBackground : undefined}
        />
      ))}
    </Container>
  );
};

export default GatherMap;
