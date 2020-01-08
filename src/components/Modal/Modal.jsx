import React from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.sass';

import { ModalConfirmEmailChangeContainer } from '@components/Modal/_components/ModalConfirmEmailChange';
import { UserSettingsContainer } from '@components/Modal/_components/UserSettings';
import { Handler500 } from '@components/Modal/_components/Handler500';
import { DeprecatedLinkMessage } from '@components/Modal/_components/DeprecatedLinkMessage';
import ModalCloseConfirm from '@components/Modal/_components/ModalCloseConfirm';
import ModalChangeEmailContainer from '@components/Modal/_components/ModalChangeEmail/ModalChangeEmailContainer';
import { ModalChangePasswordContainer } from '@components/Modal/_components/ModalChangePassword';
import { ModalCropperPreviewContainer } from '@components/Modal/_components/ModalCropperPreview';
import { ModalChangePasswordSuccess } from '@components/Modal/_components/ModalChangePasswordSuccess';
import { ModalFillRequiredFields } from '@components/Modal/_components/ModalFillRequiredFields';
import { ModalLogoutConfirmationView }
  from '@components/Modal/_components/ModalLogoutConfirmation';
import { PrimaryColorBlock } from '@components/StyledComponents/ColorBlocks';


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

    this.modalWindowRef = React.createRef();
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
    // window.document.addEventListener('touchstart', this.onOverlayClick, false);
    // window.document.addEventListener('mousedown', this.onOverlayClick, false);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    // window.document.removeEventListener('touchstart', this.onOverlayClick, false);
    // window.document.removeEventListener('mousedown', this.onOverlayClick, false);
  }

  onOverlayClick(e) {
    if (this.modalWindowRef.current === e.target) {
      this.onOpenConfirmModal();
    }
  }

  onOverlayClickWithoutConfirmation(e, key) {
    if (this.modalWindowRef.current === e.target) {
      this.onClickEnvironmentModalClose(key);
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
    const { itemKey, options } = this.props;

    switch (itemKey) {
      case 'Handler500':
        return <Handler500 onClose={this.onClickEnvironmentModalClose} itemKey={itemKey} withoutConfirmation="true"/>;
      case 'DeprecatedLinkMessage':
        return <DeprecatedLinkMessage onClose={this.onClickEnvironmentModalClose} itemKey={itemKey}
                                      withoutConfirmation="true"/>;
      case 'UserSettings':
        return <UserSettingsContainer onClose={this.onOpenConfirmModal} options={options}/>;
      case 'ModalChangeEmail':
        return <ModalChangeEmailContainer onClose={this.onOpenConfirmModal}/>;
      case 'ModalConfirmEmailChange':
        return <ModalConfirmEmailChangeContainer onClose={this.onOpenConfirmModal}/>;
      case 'ModalChangePassword':
        return <ModalChangePasswordContainer onClose={this.onOpenConfirmModal}/>;
      case 'ModalCropperPreview':
        return <ModalCropperPreviewContainer onClose={this.onOpenConfirmModal} options={options}/>;
      case 'ModalChangePasswordSuccess':
        return <ModalChangePasswordSuccess onClose={this.onClickEnvironmentModalClose} itemKey={itemKey}
                                           withoutConfirmation="true"/>;
      case 'ModalFillRequiredFields':
        return <ModalFillRequiredFields onClose={this.onClickEnvironmentModalClose} itemKey={itemKey}
                                        withoutConfirmation="true"/>;
      case 'ModalLogoutConfirmation':
        return <ModalLogoutConfirmationView onClose={this.onClickEnvironmentModalClose} itemKey={itemKey}
                                                 withoutConfirmation="true"/>;
      default:
        return null;
    }
  };


  render() {
    const { zIndex, modalState, itemKey, modalOpen } = this.props;
    const { isConfirmModalOpen, theme } = this.state;
    const filteredModalKey = modalState.filter(item => item === itemKey);

    if (filteredModalKey.length === 0) return null;

    return (
      ReactDOM.createPortal(
        <>
          <PrimaryColorBlock
            className={`${s.overlay} ${this.state.isOpen ? s.overlay_shown : ''}`}
            style={{ zIndex: 1000 + zIndex }}
          />
          <div
            ref={this.modalWindowRef}
            id={`modal-window-${zIndex}`}
            className={`${s.modalWindow} ${this.state.isOpen ? s.modalWindow_shown : ''}`}
            style={{ zIndex: 1001 + zIndex }}
            onMouseDown={e => this.onRenderModalContent().props.withoutConfirmation
              ? this.onOverlayClickWithoutConfirmation(e, itemKey)
              : this.onOverlayClick(e)}
            onTouchStart={e => this.onRenderModalContent().props.withoutConfirmation
              ? this.onOverlayClickWithoutConfirmation(e, itemKey)
              : this.onOverlayClick(e)}
          >
            {this.onRenderModalContent()}
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
