
import io from 'socket.io-client';

export const socket = io(process.env.REACT_APP_BACKEND_URL);

export const initializeSocket = () => {
  socket.on('connect', () => {
    console.log('Connected to server');
  });

  return () => {
    socket.disconnect();
  };
};