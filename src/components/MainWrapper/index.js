import React from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';

import s from './style.module.sass';

import SidebarWrapperContainer from '@components/SidebarWrapper/SidebarWrapperContainer';
import { appThemes } from '@components/StyledComponents';

export class MainWrapper extends React.PureComponent {
  state = {
    theme: appThemes.origin,
  };

  originTheme = () => this.setState({ theme: appThemes.origin });

  alternativeTheme = () => this.setState({ theme: appThemes.alternative });

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
};
