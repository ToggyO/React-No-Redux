import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';

import s from './style.module.sass';

import SidebarWrapperContainer from '@components/SidebarWrapper/SidebarWrapperContainer';
import { authSelectors } from '@ducks/auth';
import { userActions } from '@ducks/user';

class MainWrapper extends React.PureComponent {
  render() {
    const { children, originTheme, alternativeTheme } = this.props;

    return (
      <div className={`${s.wrapper} flex`}>
        <SidebarWrapperContainer alternativeTheme={alternativeTheme} originTheme={originTheme} />
        <div className={s.children}>{children}</div>
      </div>
    );
  }
}

MainWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func]),
  originTheme: PT.func,
  alternativeTheme: PT.func,
};

const mapStateToProps = state => ({
  uiTheme: authSelectors.uiThemeSelector(state),
});

const mapDispatchToProps = dispatch => ({
  changeUiTheme(theme) {
    dispatch(userActions.changeUiTheme(theme));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWrapper);
