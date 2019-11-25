import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PT from 'prop-types';

export default class CustomScrollbar extends React.Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    // this.renderTrackHorizontal = this.renderTrackHorizontal.bind(this);
    // this.renderTrackVertical = this.renderTrackVertical.bind(this);
    this.renderThumbHorizontal = this.renderThumbHorizontal.bind(this);
    this.renderThumbVertical = this.renderThumbVertical.bind(this);
  }

  // renderTrackHorizontal({ style, ...props }) {
  //   return <div style={{ ...style, ...this.props.trackStyleHorizontal }} {...props}/>;
  // }
  //
  // renderTrackVertical({ style, ...props }) {
  //   return <div style={{ ...style, ...this.props.trackStyleVertical }} {...props}/>;
  // }

  renderThumbHorizontal({ style, ...props }) {
    return <div style={{ ...style, ...this.props.thumbStyleHorizontal }} {...props} />;
  }

  renderThumbVertical({ style, ...props }) {
    return <div style={{ ...style, ...this.props.thumbStyleVertical }} {...props} />;
  }

  render() {
    const {
      trackStyleHorizontal,
      trackStyleVertical,
      thumbStyleHorizontal,
      thumbStyleVertical,
      ...rest
    } = this.props;

    return (
      <Scrollbars
        // renderTrackHorizontal={this.renderTrackHorizontal}
        // renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={this.renderThumbHorizontal}
        renderThumbVertical={this.renderThumbVertical}
        {...rest}
      />
    );
  }
}

CustomScrollbar.propTypes = {
  trackStyleHorizontal: PT.object,
  trackStyleVertical: PT.object,
  thumbStyleHorizontal: PT.object,
  thumbStyleVertical: PT.object,
};
