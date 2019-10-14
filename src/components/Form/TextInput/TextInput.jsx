import React from 'react';
import PropTypes from 'prop-types';

import { ImageBefore } from '../ImgBefore';
import { LabelWrapper } from '../LabelWrapper';

import s from './style.module.sass';

const TextInput = props => {
  const { addClass, field, form, label, imgbefore, inputstyle } = props;
  const { touched, errors, values } = form;

  const inputId = `input-${field.name}`;

  return (
    <div className={`${s.text_input} ${addClass}`}>
      <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
        <div
          className={`${s.container} form_border ${
            errors[field.name] && touched[field.name] ? 'error' : null
          } flex`}
        >
          {imgbefore && <ImageBefore src={imgbefore} imageWidth={18} imageHeight={16} />}
          <input
            {...field}
            id={inputId}
            className={`default_input ${errors[field.name] && touched[field.name] ? 'error-label' : null}`}
            value={values[field.name]}
            name={field.name}
            style={inputstyle}
            {...props}
          />
        </div>
      </LabelWrapper>
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  addClass: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  imgbefore: PropTypes.string,
  inputstyle: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
