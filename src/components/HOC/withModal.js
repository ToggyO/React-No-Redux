import React from 'react';
import { connect } from 'react-redux';

import { modalActions } from '@ducks/modal';

/* eslint-disable */
export function withModal(WrappedComponent) {
  class HOC extends React.Component {
    render() {
      const { modalOpen, modalClose, ...rest } = this.props;
      return <WrappedComponent modalOpen={modalOpen} modalClose={modalClose} {...rest} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(HOC);
}

function mapDispatchToProps(dispatch) {
  return {
    modalOpen(modalKey, options) {
      dispatch(modalActions.modalOpen(modalKey, options));
    },
    modalClose() {
      dispatch(modalActions.modalClose());
    },
  };
}
