import { eventChannel } from 'redux-saga';

// import { createSocketConnection } from '@services/signalR';
// TODO teamId
export const subscribeOnUserProjects = ({ socket }) =>
  eventChannel(emit => {
    socket.on('BroadcastProjects', emit({ type: 'EMMITTED' }));
  });
