import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import PT from 'prop-types';
import './style.sass';


export const Tooltip = ({
  children,
  tooltip,
  hideArrow,
  containerClass,
  arrowClass,
  tooltipShownState,
  // eslint-disable-next-line react/prop-types
  innerRef,
  ...props
}) => (
  <TooltipTrigger
    {...props}
    ref={innerRef}
    modifiers={{
      preventOverflow: {
        boundariesElement: 'viewport',
        padding: 0,
      },
    }}
    onVisibilityChange={props.onVisibilityChange}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement,
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: containerClass || 'tooltip-container',
        })}
      >
        <div
          {...getArrowProps({
            ref: arrowRef,
            className: arrowClass || 'tooltip-arrow',
            'data-placement': placement,
          })}
        />
        {tooltip}
      </div>
    )}
  >
    {({getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger',
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);

Tooltip.propTypes = {
  children: PT.oneOfType([
    PT.node,
    PT.element,
    PT.func,
  ]),
  tooltip: PT.object,
  hideArrow: PT.func,
  containerClass: PT.string,
  arrowClass: PT.string,
  onVisibilityChange: PT.func,
  tooltipShownState: PT.bool,
};



