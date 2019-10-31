import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.sass';

const FormTemplateView = props => {
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
      <div className={`${style.label_small} ${addTitleSmallClass} text-align-center mb-10`}>
        <h4>{titleSmall}</h4>
      </div>
      <div className={`${style.label_content} ${addChildrenClass}`}>{children}</div>
      <div className={`${style.label_small} ${addLinkClass} text-align-center pt-2`}>
        {link}
      </div>
    </div>
  );
};

export default FormTemplateView;

FormTemplateView.propTypes = {
  addContainerClass: PropTypes.string,
  titleLarge: PropTypes.string,
  addTitleLargeClass: PropTypes.string,
  titleSmall: PropTypes.string,
  addTitleSmallClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]),
  addChildrenClass: PropTypes.string,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  addLinkClass: PropTypes.string,
};
