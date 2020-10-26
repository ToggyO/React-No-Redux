import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';

import { connect } from '@ducks/storeHelpers';
import { _globalActions, _globalSelectors } from '@ducks/store';
import { SpinnerWrapper } from '@components/SpinnerWrapper';
import { authSelectors, authActions } from '@ducks/store/auth';

const SomePageView = ({
  toggleGlobalLoading,
  globalLoading,
  setAuthInfo,
  clearAuthInfo,
  authInfo,
}) => {
  const toggleLoader = () => {
    toggleGlobalLoading(true);
    setTimeout(() => toggleGlobalLoading(false), 3000);
  };

  return (
    <PageHeader title="Some page">
      <SpinnerWrapper loading={globalLoading}>
        <button
          type="button"
          onClick={() => toggleLoader()}
        >
          Toggle loader
        </button>
        {globalLoading ? <div>loading</div> : null}
      </SpinnerWrapper>
      <div style={{ marginTop: 20 }}>
        <button
          type="button"
          onClick={() => setAuthInfo({
            accessToken: 'sdfsgdfghhgjghj',
            accessTokenExpire: 12312,
            refreshToken: 'sresdfsdfsdf',
          })}
        >
          Set auth info
        </button>
        <button type="button" onClick={() => clearAuthInfo()}>
          Clear auth info
        </button>
        <p>{authInfo.accessToken}</p>
        <p>{authInfo.accessTokenExpire}</p>
        <p>{authInfo.refreshToken}</p>
      </div>
    </PageHeader>
  );
};

SomePageView.propTypes = {
  toggleGlobalLoading: PropTypes.func,
  globalLoading: PropTypes.bool,
  setAuthInfo: PropTypes.func,
  clearAuthInfo: PropTypes.func,
  authInfo: PropTypes.shape({
    accessToken: PropTypes.string,
    accessTokenExpire: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    refreshToken: PropTypes.string,
  }),
};

SomePageView.defaultProps = {
  toggleGlobalLoading: Function.prototype,
  globalLoading: false,
};

const mapStateToProps = state => ({
  globalLoading: _globalSelectors.globalLoaderSelector(state),
  authInfo: authSelectors.authInfoSelector(state),
});

const mapDispatchToProps = dispatch => ({
  toggleGlobalLoading(newState) {
    dispatch(_globalActions.setGlobalLoading(newState));
  },
  setAuthInfo(params) {
    dispatch(authActions.setAuthInfo(params));
  },
  clearAuthInfo() {
    dispatch(authActions.clearAuthInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SomePageView);
