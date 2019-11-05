import React, { useState } from 'react';
import PT from 'prop-types';

import { ImageBefore } from '../ImgBefore';
import { LabelWrapper } from '../LabelWrapper';

import s from './style.module.sass';

export const TextInput = props => {
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
            errors.global || (errors[field.name] && touched[field.name]) ? 'error' : null
          } flex`}
        >
          {imgBefore && <ImageBefore src={imgBefore} imageWidth={18} imageHeight={16} />}
          <input
            {...field}
            type={type}
            id={inputId}
            className={`default_input ${
              errors.global || (errors[field.name] && touched[field.name]) ? 'error-label' : null
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

TextInput.propTypes = {
  addClassWrapper: PT.string,
  addClassInput: PT.string,
  type: PT.string,
  placeholder: PT.string,
  field: PT.object,
  form: PT.object,
  label: PT.string,
  imgBefore: PT.string,
  inputStyle: PT.object,
  touched: PT.object,
  errors: PT.object,
  additionalElement: PT.element,
  multiple: PT.bool,
};
