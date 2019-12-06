import React from 'react';

import { connect } from 'react-redux';

import { ModalContainer } from '@components/Modal';
import GlobalErrorMessage from '@components/GlobalErrorMessage';
import { globalSelectors } from '@ducks/global';
import { modalSelectors } from '@ducks/modal';

/* eslint-disable */
const Portals = ({ modal, globalErrorMessage }) => (
  <>
    {modal.length > 0 && modal.map((item, i) => <ModalContainer key={item} zIndex={i} itemKey={item} />)}
    {globalErrorMessage ? <GlobalErrorMessage /> : null}
  </>
);

const mapStateToProps = state => ({
  globalErrorMessage: globalSelectors.globalErrorSelector(state),
  modal: modalSelectors.modalKeySelector(state),
  // userInfo: authSelectors.userInfoSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(Portals);
