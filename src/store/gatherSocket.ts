import io from 'socket.io-client';

export default io(process.env.NEXT_PUBLIC_SOCKET_BASE_URL as string);
