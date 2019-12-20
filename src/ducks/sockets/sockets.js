import { eventChannel, buffers } from 'redux-saga';

export const createNotificationChannel = ({ socket, subscribeMethod, watchMethod, data }) =>
  eventChannel(emit => {
    const receiveProjects = payload => {
      emit({
        watchMethod,
        payload,
      });
    };

    socket.invoke(subscribeMethod, data);
    socket.on(watchMethod, receiveProjects);

    return () => socket.off(watchMethod, receiveProjects);
  }, buffers.expanding());
