import React from 'react';
import PT from 'prop-types';

import style from './style.module.sass';

export const FormTemplateView = props => {
  const {
    titleLarge,
    titleSmall,
    children,
    link,
    addContainerClass = '',
    addTitleLargeClass = '',
    addTitleSmallClass = '',
    addChildrenClass = '',
    addLinkClass = '',
  } = props;

  return (
    <div className={`${style.container} ${addContainerClass} text-align-center`}>
      <div className={`${style.label_large} ${addTitleLargeClass} text-align-center mb-2`}>
        <h2>{titleLarge}</h2>
      </div>
      <div className={`${style.label_small} ${addTitleSmallClass} text-align-center mb-6`}>
        <h4>{titleSmall}</h4>
      </div>
      <div className={`${style.label_content} ${addChildrenClass}`}>{children}</div>
      <div className={`${style.label_small} ${addLinkClass} text-align-center pt-2`}>{link}</div>
    </div>
  );
};

FormTemplateView.propTypes = {
  addContainerClass: PT.string,
  titleLarge: PT.string,
  addTitleLargeClass: PT.string,
  titleSmall: PT.oneOfType([PT.string, PT.node, PT.element, PT.elementType]),
  addTitleSmallClass: PT.string,
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node), PT.element]),
  addChildrenClass: PT.string,
  link: PT.oneOfType([PT.string, PT.node, PT.element, PT.elementType]),
  addLinkClass: PT.string,
};
