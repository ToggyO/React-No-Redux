import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.sass';

import { UserSettingsContainer } from '@components/Modal/_components/UserSettings';


import { Handler500 } from '@components/Modal/_components/Handler500';
import { DeprecatedLinkMessage } from '@components/Modal/_components/DeprecatedLinkMessage';
import ModalCloseConfirm from '@components/Modal/_components/ModalCloseConfirm';


/* eslint-disable */
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isConfirmModalOpen: false,
    };
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
    this.onClickEnvironmentModalClose = this.onClickEnvironmentModalClose.bind(this);
    this.onOverlayClick = this.onOverlayClick.bind(this);
    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
    this.onRenderModalContent = this.onRenderModalContent.bind(this);

    this.overlayRef = React.createRef();
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
    window.document.addEventListener('touchstart', this.onOverlayClick, false);
    window.document.addEventListener('mousedown', this.onOverlayClick, false);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    window.document.removeEventListener('touchstart', this.onOverlayClick, false);
    window.document.removeEventListener('mousedown', this.onOverlayClick, false);
  }

  onOverlayClick(e) {
    if (this.overlayRef.current.contains(e.target)) {
      console.log(this.overlayRef.current.contains(e.target));
      this.onOpenConfirmModal();
    }
  }

  onClickEnvironmentModalClose(key) {
    this.setState(prevState => ({ ...prevState, isOpen: false }));
    setTimeout(() => this.props.modalClose(key), 200);
  };

  onOpenConfirmModal() {
    this.setState(prevState => ({ ...prevState, isConfirmModalOpen: true }));
  }

  onCloseConfirmModal() {
    this.setState(prevState => ({ ...prevState, isConfirmModalOpen: false }));
  }

  onRenderModalContent = () => {
    const { itemKey } = this.props;

    switch (itemKey) {
      case 'Handler500':
        return <Handler500 onClose={this.onOpenConfirmModal}/>;
      case 'DeprecatedLinkMessage':
        return <DeprecatedLinkMessage onClose={this.onOpenConfirmModal}/>;
      case 'UserSettings':
        return <UserSettingsContainer onClose={this.onOpenConfirmModal}/>;
      default:
        return null;
    }
  };


  render() {
    const { zIndex, modalState, itemKey, modalOpen } = this.props;
    const { isConfirmModalOpen } = this.state;
    const filteredModalKey = modalState.filter(item => item === itemKey);

    if (filteredModalKey.length === 0) return null;

    return (
      ReactDOM.createPortal(
        <>
          <div
            ref={this.overlayRef}
            id={`modal-overlay-${zIndex}`}
            className={`${s.overlay} ${this.state.isOpen ? s.overlay_shown : ''}`}
            style={{ zIndex: 1000 + zIndex }}
            onClick={this.onOverlayClick}
            onTouchStart={this.onOverlayClick}
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
          <ModalCloseConfirm
            isConfirmModalOpen={isConfirmModalOpen}
            onClose={this.onClickEnvironmentModalClose}
            onCloseConfirmModal={this.onCloseConfirmModal}
            zIndex={zIndex}
            itemKey={itemKey}
          />
        </>,
        this.el,
      )
    );
  }
}

export default Modal;
