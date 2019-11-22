import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PT from 'prop-types';

export default class CustomScrollbar extends React.Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.renderThumb = this.renderThumb.bind(this);
  }

  renderThumb({ style }) {
    return <div style={{ ...style, ...this.props.thumbstyle }} />;
  }

  render() {
    return (
      <Scrollbars
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        {...this.props}
      />
    );
  }
}

CustomScrollbar.propTypes = {
  thumbstyle: PT.object,
};
