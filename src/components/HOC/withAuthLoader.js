import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authLoaderStart, authLoaderStop } from '@ducks/auth/actions';

/* eslint-disable */
export function withAuthLoader(WrappedComponent) {
  function mapDispatchToProps(dispatch) {
    return {
      loaderStart: bindActionCreators(authLoaderStart, dispatch),
      loaderStop: bindActionCreators(authLoaderStop, dispatch),
    };
  }
  class HOC extends React.PureComponent {
    render() {
      const { loaderStart, loaderStop, ...rest } = this.props;
      return <WrappedComponent loaderStart={loaderStart} loaderStop={loaderStop} {...rest} />;
    }
  }
  return connect(
    null,
    mapDispatchToProps
  )(HOC);
}
