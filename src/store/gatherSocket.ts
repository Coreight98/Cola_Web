import socketIOClient from 'socket.io-client';

export default socketIOClient(process.env.NEXT_PUBLIC_SOCKET_BASE_URL);
