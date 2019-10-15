import React from 'react';
import PropTypes from 'prop-types';

import { ImageBefore } from '../ImgBefore';
import { LabelWrapper } from '../LabelWrapper';

import s from './style.module.sass';

const TextInput = props => {
  const { addClassWrapper, addClassInput, field, form, label, imgBefore, inputStyle } = props;
  const { touched, errors, values } = form;

  const inputId = `input-${field.name}`;

  return (
    <div className={`${s.text_input} ${addClassWrapper}`}>
      <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
        <div
          className={`${s.container} form_border ${
            errors[field.name] && touched[field.name] ? 'error' : null
          } flex`}
        >
          {imgBefore && <ImageBefore src={imgBefore} imageWidth={18} imageHeight={16} />}
          <input
            {...field}
            id={inputId}
            className={`default_input ${
              errors[field.name] && touched[field.name] ? 'error-label' : null
            } ${addClassInput}`}
            value={values[field.name]}
            name={field.name}
            style={inputStyle}
          />
        </div>
      </LabelWrapper>
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  addClassWrapper: PropTypes.string,
  addClassInput: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  imgBefore: PropTypes.string,
  inputStyle: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
