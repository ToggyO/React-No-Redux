import React from 'react';

import { hideGlobalError, showGlobalError } from '@ducks/global/actions';

export default function (ComposedComponent) {
  class NetworkDetector extends React.Component {
    state = {
      isDisconnected: false,
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    // eslint-disable-next-line no-unused-vars
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.isDisconnected) {
        showGlobalError('Internet connection lost.');
      } else {
        hideGlobalError();
      }
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
            })
              .then(() => {
                this.setState({ isDisconnected: false }, () => clearInterval(webPing));
              }).catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }
      // eslint-disable-next-line consistent-return
      return this.setState({ isDisconnected: true });
    };

    render() {
      const { isDisconnected } = this.state;
      return (
        <div>
          { isDisconnected && <div>Connection lost.</div> }
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  return (NetworkDetector);
}
