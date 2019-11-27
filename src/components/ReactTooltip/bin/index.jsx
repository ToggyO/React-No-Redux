import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import './style.sass';


// eslint-disable-next-line react/prop-types
export const Tooltip = ({children, tooltip, hideArrow, containerClass, arrowClass, ...props}) => (
  <TooltipTrigger
    {...props}
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
    {({getTriggerProps, triggerRef}) => (
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


