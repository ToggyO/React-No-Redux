import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { getFromState } from '@utils/index';
import { LOCAL_STORAGE_KEYS } from '@config/common';
import { appThemes } from '@components/StyledComponents';
import { authSelectors } from '@ducks/auth';
import { userActions } from '@ducks/user';

// TODO delete
/* eslint-disable */
export function withThemeProvider(WrappedComponent) {
  const mapStateToProps = state => ({
    uiTheme: authSelectors.uiThemeSelector(state),
  });

  const mapDispatchToProps = dispatch => ({
    changeUiTheme(theme) {
      dispatch(userActions.changeUiTheme(theme));
    },
  });

  class HOC extends React.PureComponent {
    constructor(props) {
      super(props);
      this.userData = getFromState(LOCAL_STORAGE_KEYS.USER);
      this.state = {
        theme: props.uiTheme ? appThemes[props.uiTheme] : appThemes.Default,
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
      const { theme } = this.state;
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent
            {...this.props}
            originTheme={this.originTheme}
            alternativeTheme={this.alternativeTheme}
          />
        </ThemeProvider>
      );
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
}
