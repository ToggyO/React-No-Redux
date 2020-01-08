import { LOCAL_STORAGE_KEYS, API_DOMAIN } from '@config';
import { getFromState } from '@utils/index';

const signalR = require('@microsoft/signalr');

const connectionsList = [];

class SocketConnection {
  constructor({ url }) {
    this._baseURL = `${API_DOMAIN}/api`;
    this._url = url;

    this.connect = this.connect.bind(this);
  }

  async connect() {
    if (!connectionsList.includes(this._url)) {
      connectionsList.push(this._url);

      const finalURL = this._baseURL ? `${this._baseURL}${this._url}` : this._url;
      console.log(`${this._baseURL}${this._url}`);
      const connection = await new signalR.HubConnectionBuilder()
        .withUrl(finalURL, {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets,
          accessTokenFactory: () => getFromState(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
        })
        .withAutomaticReconnect([])
        .configureLogging(signalR.LogLevel.Information)
        .build();

      await connection
        .start()
        .then(() => {
          console.log('Connected');
          return Promise.resolve(connection);
        })
        .catch(error => {
          console.error(error.toString());
          return Promise.resolve(error);
        });

      await connection.onreconnecting(error => {
        console.assert(connection.state === signalR.HubConnectionState.Reconnecting);
        console.log(`Connection lost due to error ${error}. Reconnecting.`);
      });

      await connection.onreconnected(connectionId => {
        console.assert(connection.state === signalR.HubConnectionState.Connected);
        console.log(`Connection reestablished. Connected with connectionId ${connectionId}.`);
      });

      await connection.onclose(error => {
        console.log(error);
        console.log(
          `Connection closed due to error "${error}". Try refreshing this page to restart the connection.`
        );
      });
      return connection;
    }
    return null;
  }
}

export const createSocketConnection = url => {
  const connection = new SocketConnection({ url });
  return connection.connect();
};
