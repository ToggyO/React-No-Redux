import React from 'react';
import { connect } from 'react-redux';

import GlobalMessage from '@components/GlobalMessage';
import { ModalContainer } from '@components/Modal';
import { globalSelectors } from '@ducks/global';
import { modalSelectors } from '@ducks/modal';
import { authSelectors } from '@ducks/auth';

/* eslint-disable */
const Portals = ({ modal, globalErrorMessage, globalSuccessMessage, options, uiTheme }) => (
  <>
    {modal.length > 0 &&
      modal.map((item, i) => <ModalContainer key={item} zIndex={i} itemKey={item} options={options} />)}
    {globalErrorMessage || globalSuccessMessage ? <GlobalMessage /> : null}
  </>
);

const mapStateToProps = state => ({
  globalSuccessMessage: globalSelectors.globalSuccessSelector(state),
  globalErrorMessage: globalSelectors.globalErrorSelector(state),
  modal: modalSelectors.modalKeySelector(state),
  options: modalSelectors.modalOptionsSelector(state),
  uiTheme: authSelectors.uiThemeSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(Portals);
