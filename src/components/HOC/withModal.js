// import React from 'react';
// import { connect } from 'react-redux';
//
// import { modalActions } from '@ducks/modal';
//
//
// export function withModal(WrappedComponent) {
//   class HOC extends React.Component {
//     render() {
//       const { modalOpen, modalClose, ...rest } = this.props;
//       debugger;
//       return <WrappedComponent onOpen={modalOpen} onClose={modalClose} {...rest}/>
//     }
//   }
//   return connect(null, mapDispatchToProps)(HOC);
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     modalOpen(modalKey) {
//       dispatch(modalActions.modalOpen(modalKey));
//     },
//     modalClose() {
//       dispatch(modalActions.modalClose());
//     },
//   }
// }
//
