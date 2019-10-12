import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.sass';

const FormTemplateView = props => {
  const { titleLarge, titleSmall, children, link } = props;

  return (
    <div className={`${style.container} text-align-center`}>
      <div className={`${style.label_large} text-align-center mb-2`}>
        <h2>{titleLarge}</h2>
      </div>
      <div className={`${style.label_small} text-align-center mb-10`}>
        <h4>{titleSmall}</h4>
      </div>
      <div className={style.label_content}>{children}</div>
      <div className={`${style.label_small} text-align-center mt-4`}>
        <a href="#">{link}</a>
      </div>
    </div>
  );
};

export default FormTemplateView;

FormTemplateView.propTypes = {
  titleLarge: PropTypes.string,
  titleSmall: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.element]),
  link: PropTypes.string,
};
