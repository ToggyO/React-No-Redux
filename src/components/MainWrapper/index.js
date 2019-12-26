import React from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';

import s from './style.module.sass';

import SidebarWrapperContainer from '@components/SidebarWrapper/SidebarWrapperContainer';

const origin = {
  colors: {
    primaryColor: '#495570',
    secondaryColor: '#9398A2',
    white: '#FFFFFF',
    scarlet: '#E76A7D',
  },
};

const alternative = {
  colors: {
    primaryColor: '#D3D3D3',
    secondaryColor: '#F8F8F8',
    white: '#FFFFFF',
    scarlet: '#E76A7D',
  },
};

export class MainWrapper extends React.PureComponent {
  state = {
    theme: origin,
  };

  originTheme = () => this.setState({ theme: origin });

  alternativeTheme = () => this.setState({ theme: alternative });

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
