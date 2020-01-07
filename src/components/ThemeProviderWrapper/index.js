import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { getFromState } from '@utils/index';
import { LOCAL_STORAGE_KEYS } from '@config/common';
import { appThemes } from '@components/StyledComponents';
import { authSelectors } from '@ducks/auth';
import { userActions } from '@ducks/user';

export const ToggleThemeContext = React.createContext();

/* eslint-disable */
class ThemeProviderWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.userData = getFromState(LOCAL_STORAGE_KEYS.USER);
    this.state = {
      theme: () => {
        if (props.uiTheme) {
          return appThemes[props.uiTheme];
        } else if (this.userData) {
          return appThemes[this.userData.uiTheme];
        }
        return appThemes.Default;
      },
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.uiTheme !== prevProps.uiTheme) {
      this.setState({ theme: appThemes[this.props.uiTheme] });
    }
  }

  toggleTheme = theme => {
    this.props.changeUiTheme(theme);
    this.setState({ theme: appThemes[theme] });
  };

  render() {
    const { theme } = this.state;
    const { children } = this.props;
    return (
      <ToggleThemeContext.Provider value={this.toggleTheme}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ToggleThemeContext.Provider>
    );
  }
}

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
)(ThemeProviderWrapper);
