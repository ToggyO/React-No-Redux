import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.sass';

import { Handler500 } from '@components/Modal/_components/Handler500';
import { DeprecatedLinkMessage } from '@components/Modal/_components/DeprecatedLinkMessage';
import ModalCloseConfirm from '@components/Modal/_components/ModalCloseConfirm';


/* eslint-disable */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
    this.onClickEnvironmentModalClose = this.onClickEnvironmentModalClose.bind(this);
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isOpen !== prevState.isOpen) console.log(this.state.isOpen);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  onClickEnvironmentModalClose = key => {
    // debugger;
    this.setState({ isOpen: false });
    setTimeout(() => this.props.modalClose(key), 200);
  };

  onRenderModalContent = () => {
    const { itemKey, modalState } = this.props;
    const willBeClosedModalKey = modalState[modalState.length-2];
    const modalCloseConfirm = this.props.modalOpen;

    switch (itemKey) {
      case 'ModalCloseConfirm':
        return <ModalCloseConfirm
          onClose={this.onClickEnvironmentModalClose}
          itemKey={willBeClosedModalKey}
        />;
      case 'Handler500':
        return <Handler500 onClose={() => modalCloseConfirm('ModalCloseConfirm')}/>;
      case 'DeprecatedLinkMessage':
        return <DeprecatedLinkMessage onClose={() => modalCloseConfirm('ModalCloseConfirm')}/>;
      default:
        return null;
    }
  };

  render() {
    const { zIndex, modalState, itemKey, modalOpen } = this.props;
    const filteredModalKey = modalState.filter(item => item === itemKey);
    if (filteredModalKey.length === 0) return null;

    return (
      ReactDOM.createPortal(
        <>
          <div
            className={`${s.overlay} ${this.state.isOpen ? s.overlay_shown : ''}`}
            style={{ zIndex: 1000 + zIndex }}
            onClick={() => modalOpen('ModalCloseConfirm')}
            // onClick={this.onClickEnvironmentModalClose}
            id="modal-overlay"
          />
          <div
            className={`${s.modalWindow} ${this.state.isOpen ? s.modalWindow_shown : ''}`}
            style={{ zIndex: 1001 + zIndex }}
          >
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
