import React from 'react';
import PT from 'prop-types';

import { connect } from 'react-redux';

import ReactDOM from 'react-dom';

import s from './style.module.sass';

import { Icon } from '@components/Icon';
import { globalActions, globalSelectors } from '@ducks/global';

class GlobalErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: '',
    };
    this.el = document.createElement('div');
    this.globalErrorRoot = document.getElementById('global-error-root');
  }

  componentDidMount() {
    this.globalErrorRoot.appendChild(this.el);
    setTimeout(() => this.setState({ isOpen: this.props.globalErrorMessage }), 0);
  }

  componentWillUnmount() {
    this.globalErrorRoot.removeChild(this.el);
  }

  onCloseErrorMessage = () => {
    this.setState({ isOpen: false });
    setTimeout(() => this.props.hideGlobalError(), 2000);
  };

  render() {
    const { iconClassName = '', globalErrorMessage } = this.props;
    const { isOpen } = this.state;

    if (!globalErrorMessage) return null;

    return ReactDOM.createPortal(
      <div
        className={`${s.container} ${isOpen ? s.shown : ''} flex justify-content-center align-items-center`}
      >
        <div className={s.icon_container}>
          <Icon iconName="delete" className={`${s.icon} ${iconClassName}`} />
        </div>
        <div className={s.text_container}>
          <p className={s.text}>{globalErrorMessage}</p>
        </div>
        <div className={s.hide_error} onClick={this.onCloseErrorMessage}>
          <Icon iconName="close-modal" />
        </div>
      </div>,
      this.el
    );
  }
}

GlobalErrorMessage.propTypes = {
  iconClassName: PT.string,
  globalErrorMessage: PT.string,
  hideGlobalError: PT.func,
};

const mapStateToProps = state => ({
  globalErrorMessage: globalSelectors.globalErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  hideGlobalError() {
    dispatch(globalActions.hideGlobalError());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalErrorMessage);
