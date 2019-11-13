import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearExtra } from '@ducks/auth/actions';

export function withMessageSuccess(WrappedComponent) {
  function mapDispatchToProps(dispatch) {
    return {
      clearExtra: bindActionCreators(clearExtra, dispatch),
    };
  }
  class HOC extends React.PureComponent {
    render() {
      // eslint-disable-next-line react/prop-types
      return <WrappedComponent clearStore={this.props.clearExtra} {...this.props} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(HOC);
}
