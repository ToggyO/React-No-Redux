import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import SidebarWrapperContainer from '@components/SidebarWrapper/SidebarWrapperContainer';

export class MainWrapper extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className={`${s.wrapper} flex`}>
        <SidebarWrapperContainer />
        <div className={s.children}>{children}</div>
      </div>
    );
  }
}

MainWrapper.propTypes = {
  children: PT.oneOfType([PT.element, PT.node, PT.func]),
};
