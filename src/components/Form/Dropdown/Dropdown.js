import React from 'react';
import PT from 'prop-types';
import classNames from 'classnames';

import s from './style.module.sass';

class Dropdown extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    disabled: PT.bool,
    list: PT.arrayOf(PT.node),
    position: PT.string,
    menuClassName: PT.string,
    outerListClassName: PT.string,
    elementClassName: PT.string,
    innerListClassName: PT.string,
    children: PT.oneOfType([PT.node, PT.element]),
  };

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    disabled: false,
    list: [],
    position: 'left',
    menuClassName: '',
    outerListClassName: '',
    innerListClassName: '',
  };

  state = {
    showMenu: false,
  };

  menu = React.createRef();

  menuButton = React.createRef();

  outsideClickListener = e => {
    if (!this.menu.current.contains(e.target) && !this.menuButton.current.contains(e.target)) {
      this.toggleMenu();
    }
  };

  toggleMenu = () => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }

    if (this.state.showMenu) {
      this.setState({ showMenu: false });
      window.document.removeEventListener('touchstart', this.outsideClickListener, false);
      window.document.removeEventListener('mousedown', this.outsideClickListener, false);
    } else {
      this.setState({ showMenu: true });
      window.document.addEventListener('touchstart', this.outsideClickListener, false);
      window.document.addEventListener('mousedown', this.outsideClickListener, false);
    }
  };

  render() {
    const {
      children = null,
      list,
      menuClassName,
      outerListClassName,
      innerListClassName,
      position,
      elementClassName,
    } = this.props;
    const { showMenu } = this.state;
    return (
      <div className={classNames(s.dropdown_menu, menuClassName)}>
        <div
          ref={this.menuButton}
          onClick={() => {
            this.toggleMenu();
          }}
          className={s.dropdown_menu__button}
        >
          {children}
        </div>
        <ul
          ref={this.menu}
          className={classNames(s.dropdown_menu__list, outerListClassName, `_${position}`)}
          style={{ display: !showMenu ? 'none' : 'block' }}
        >
          <div className={classNames(innerListClassName)}>
            {list.map((listItem, index) => (
              <li
                className={classNames(s.dropdown_menu__list_element, elementClassName)}
                key={index}
                onClick={() => {
                  this.toggleMenu();
                }}
              >
                {listItem}
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
