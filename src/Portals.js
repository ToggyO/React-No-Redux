import React from 'react';

import { connect } from 'react-redux';

import GlobalMessage from '@components/GlobalMessage';

import { ModalContainer } from '@components/Modal';
import { globalSelectors } from '@ducks/global';
import { modalSelectors } from '@ducks/modal';

/* eslint-disable */
const Portals = ({ modal, globalErrorMessage, globalSuccessMessage }) => (
  <>
    {modal.length > 0 && modal.map((item, i) => <ModalContainer key={item} zIndex={i} itemKey={item} />)}
    {globalErrorMessage || globalSuccessMessage ? <GlobalMessage /> : null}
  </>
);

const mapStateToProps = state => ({
  globalSuccessMessage: globalSelectors.globalSuccessSelector(state),
  globalErrorMessage: globalSelectors.globalErrorSelector(state),
  modal: modalSelectors.modalKeySelector(state),
});

export default connect(
  mapStateToProps,
  null
)(Portals);
