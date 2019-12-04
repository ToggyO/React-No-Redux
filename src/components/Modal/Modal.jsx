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
      isConfirmModalOpen: false,
    };
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
    this.onClickEnvironmentModalClose = this.onClickEnvironmentModalClose.bind(this);
    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
    this.onRenderModalContent = this.onRenderModalContent.bind(this);
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
    const { itemKey, modalState } = this.props;
    const willBeClosedModalKey = modalState[modalState.length-2];
    const modalCloseConfirm = this.props.modalOpen;

    switch (itemKey) {
      case 'Handler500':
        return <Handler500 onClose={this.onOpenConfirmModal}/>;
      case 'DeprecatedLinkMessage':
        return <DeprecatedLinkMessage onClose={this.onOpenConfirmModal}/>;
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
            className={`${s.overlay} ${this.state.isOpen ? s.overlay_shown : ''}`}
            style={{ zIndex: 1000 + zIndex }}
            onClick={this.onOpenConfirmModal}
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
