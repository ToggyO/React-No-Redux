import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './style.module.sass';


export class Dropdown extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    list: PropTypes.arrayOf(PropTypes.node),
    position: PropTypes.string,
    menuClassName: PropTypes.string,
    outerListClassName: PropTypes.string,
    elementClassName: PropTypes.string,
    innerListClassName: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
    ]),
  };

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

  outsideClickListener = (e) => {
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
          style={{ display: !showMenu ? 'none' : 'block' }}>
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
