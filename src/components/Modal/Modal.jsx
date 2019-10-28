import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.sass';

import { Handler500 } from '@components/Modal/_components/Handler500';


/* eslint-disable */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.modalState.modalKey !== prevProps.modalState.modalKey) {
  //
  //     if (this.props.modalState.modalKey) {
  //       document.body.style.overflow = 'hidden';
  //       document.body.style.paddingRight = '17px';
  //     } else {
  //       document.body.style.overflow = 'auto';
  //       document.body.style.paddingRight = '0';
  //     }
  //   }
  // }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    setTimeout(() => this.setState({ isOpen: true }), 0);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  onClickEnvironmentModalClose = () => {
    this.setState({ isOpen: false });
    setTimeout(() => this.props.modalClose(), 200);
  };

  onRenderModalContent = () => {
    const { modalKey, options } = this.props.modalState;
    switch (modalKey) {
      case 'Handler500':
        return <Handler500 onClose={this.onClickEnvironmentModalClose}/>;
      case 'test':
        return <div style={{ width: 150, height: 150 }}>111</div>;
      default:
        return null;
    }
  };

  render() {
    const { modalKey } = this.props.modalState;

    if (!modalKey) return null;

    return (
      ReactDOM.createPortal(
        <>
          <div
            className={`${s.overlay} ${this.state.isOpen ? s.overlay_shown : ''}`}
            onClick={this.onClickEnvironmentModalClose} id="modal-overlay"
          />
          <div className={`${s.modalWindow} ${this.state.isOpen ? s.modalWindow_shown : ''}`}>
            <div className={`${s.modalWrapper}`}>
              <div className={`${s.modalContainer}`}>
                {this.onRenderModalContent()}
              </div>
            </div>
          </div>
        </>,
        this.el,
      )
    );
  }
}

export default Modal;
