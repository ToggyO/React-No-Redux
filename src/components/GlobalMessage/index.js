import React from 'react';
import PT from 'prop-types';

import { connect } from 'react-redux';

import ReactDOM from 'react-dom';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { globalActions, globalSelectors } from '@ducks/global';

class GlobalMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
    };
    this.el = document.createElement('div');
    this.globalErrorRoot = document.getElementById('global-message-root');
    this.onCloseMessage = this.onCloseMessage.bind(this);
    this.onGlobalTimeout = this.onGlobalTimeout.bind(this);
    this.onGlobalTimeout();
  }

  componentDidMount() {
    this.globalErrorRoot.appendChild(this.el);
    setTimeout(
      () =>
        this.setState({
          isOpen: this.props.globalSuccessMessage || this.props.globalErrorMessage,
        }),
      0
    );
  }

  componentWillUnmount() {
    this.globalErrorRoot.removeChild(this.el);
  }

  onCloseMessage = () => {
    this.setState({ isOpen: false });
    setTimeout(() => {
      if (this.props.globalSuccessMessage) this.props.hideGlobalSuccess();
      if (this.props.globalErrorMessage) this.props.hideGlobalError();
    }, 2000);
  };

  onGlobalTimeout = () => setTimeout(this.onCloseMessage, 10000);

  render() {
    const { iconClassName = '', globalSuccessMessage, globalErrorMessage } = this.props;
    const { isOpen } = this.state;

    if (!globalSuccessMessage && !globalErrorMessage) return null;

    return ReactDOM.createPortal(
      <div
        className={`${s.container} ${isOpen ? s.shown : ''} flex justify-content-center align-items-center`}
        style={{ backgroundColor: (globalSuccessMessage && '#53D0BA') || (globalErrorMessage && '#FF778C') }}
      >
        <div className={s.icon_container}>
          <Icon
            iconName={(globalSuccessMessage && 'accept_white') || (globalErrorMessage && 'delete')}
            className={`${s.icon} ${iconClassName}`}
          />
        </div>
        <div className={s.text_container}>
          <p className={s.text}>{globalSuccessMessage || globalErrorMessage}</p>
        </div>
        <div className={s.hide_error} onClick={this.onCloseErrorMessage}>
          <Icon iconName="close-modal" className="fill-white" />
        </div>
      </div>,
      this.el
    );
  }
}

GlobalMessage.propTypes = {
  iconClassName: PT.string,
  globalSuccessMessage: PT.string,
  globalErrorMessage: PT.string,
  hideGlobalSuccess: PT.func,
  hideGlobalError: PT.func,
};

const mapStateToProps = state => ({
  globalSuccessMessage: globalSelectors.globalSuccessSelector(state),
  globalErrorMessage: globalSelectors.globalErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  hideGlobalSuccess() {
    dispatch(globalActions.hideGlobalSuccess());
  },
  hideGlobalError() {
    dispatch(globalActions.hideGlobalError());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalMessage);
