import React from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import s from './style.module.sass';

import SidebarWrapperContainer from '@components/SidebarWrapper/SidebarWrapperContainer';
import { appThemes } from '@components/StyledComponents';
import { authSelectors } from '@ducks/auth';
import { userActions } from '@ducks/user';
import { getFromState } from '@utils/index';
import { LOCAL_STORAGE_KEYS } from '@config/common';

class MainWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.userData = getFromState(LOCAL_STORAGE_KEYS.USER);
    this.state = {
      theme: appThemes[this.userData.uiTheme] || appThemes.Default,
    };
  }

  originTheme = () => {
    this.props.changeUiTheme('Default');
    this.setState({ theme: appThemes.Default });
  };

  alternativeTheme = () => {
    this.props.changeUiTheme('Dark');
    this.setState({ theme: appThemes.Dark });
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={this.state.theme}>
        <div className={`${s.wrapper} flex`}>
          <SidebarWrapperContainer alternativeTheme={this.alternativeTheme} originTheme={this.originTheme} />
          <div className={s.children}>{children}</div>
        </div>
      </ThemeProvider>
    );
  }
}

MainWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func]),
  changeUiTheme: PT.func,
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
