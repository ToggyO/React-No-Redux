import { getFromLocalState } from '@services/ls';
import { LOCAL_STORAGE_KEYS } from '@config';
import { getFromSessionState } from '@services/ss';

const signalR = require('@microsoft/signalr');

// let isAlreadyConnected = false;
// 'http://45.61.48.176:5005/api/ws/projects'
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjJiZTBiYzIxOTM3MzRmY2E4YWNmZTkzYTJkYTFjYzllIiwidXNlcl9pZCI6ImNhOTdiYTM2MzVlODQ0ZWY4NDc3NGZlMDYyM2E3YmFiIiwicm9sZV9pZCI6ImJmMjJhM2ZkZjdlYjQ4NzFiODRhNGQ4ZmY1MWQwZjdkIiwiZXhwIjoxNTc2MjQxNDQ4LCJpc3MiOiJTcXVhZCIsImF1ZCI6IklPIn0.M9Cved1ZSwMbL9muu95vgBq6q2UpfpFrtknJ2RNDOn4'
export const createSocketConnection = url => {
  const baseURL = 'http://45.61.48.176:5005/api';
  // const baseURL = `${API_DOMAIN}/api`;
  // isAlreadyConnected = true;
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${baseURL}${url}`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
      accessTokenFactory: () =>
        getFromLocalState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) ||
        getFromSessionState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
    })
    .withAutomaticReconnect([])
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection
    .start()
    .then(() => {
      console.log('Connected');
      connection.invoke('SubscribeTeam', { teamId: '3307dec8-99d0-46c4-9935-4421230d6599' });
      return Promise.resolve(connection);
    })
    .catch(error => {
      console.error(error.toString());
      return Promise.reject(error);
    });

  connection.onreconnecting(error => {
    console.assert(connection.state === signalR.HubConnectionState.Reconnecting);
    console.log(`Connection lost due to error ${error}. Reconnecting.`);
  });

  connection.onreconnected(connectionId => {
    console.assert(connection.state === signalR.HubConnectionState.Connected);
    console.log(`Connection reestablished. Connected with connectionId ${connectionId}.`);
  });

  connection.onclose(error => {
    console.log(error);
    console.log(
      `Connection closed due to error "${error}". Try refreshing this page to restart the connection.`
    );
  });
};
