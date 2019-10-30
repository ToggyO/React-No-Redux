import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ImageBefore } from '../ImgBefore';
import { LabelWrapper } from '../LabelWrapper';

import s from './style.module.sass';

const TextInput = props => {
  const {
    addClassWrapper,
    addClassInput,
    type,
    placeholder,
    field,
    form,
    label,
    imgBefore,
    inputStyle,
    additionalElement,
  } = props;
  const { touched, errors, values } = form;
  const [isFocused, setFocus] = useState(false);

  const inputId = `input-${field.name}`;

  const customHandleFocus = () => setFocus(true);

  const customHandleBlur = e => {
    field.onBlur(e);
    setFocus(false);
  };

  return (
    <div className={`${s.text_input} ${addClassWrapper}`}>
      <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
        <div
          className={`${s.container} form_background ${isFocused ? 'form_border_focus' : 'form_border'} ${
            errors[field.name] && touched[field.name] ? 'error' : null
          } flex`}
        >
          {imgBefore && <ImageBefore src={imgBefore} imageWidth={18} imageHeight={16} />}
          <input
            {...field}
            type={type}
            id={inputId}
            className={`default_input ${
              errors[field.name] && touched[field.name] ? 'error-label' : null
            } ${addClassInput}`}
            value={values[field.name]}
            name={field.name}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={customHandleFocus}
            onBlur={customHandleBlur}
          />
          {additionalElement}
        </div>
      </LabelWrapper>
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  addClassWrapper: PropTypes.string,
  addClassInput: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  imgBefore: PropTypes.string,
  inputStyle: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  additionalElement: PropTypes.element,
  multiple: PropTypes.bool,
};
