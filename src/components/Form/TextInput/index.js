import React, { useState } from 'react';
import PT from 'prop-types';

import { ImageBefore } from '../ImgBefore';
import { LabelWrapper } from '../LabelWrapper';

import s from './style.module.sass';
import { style as imgBeforeStyle } from './img_before_style';

export const TextInput = props => {
  const {
    addClassWrapper,
    addClassLabel,
    addClassInputContainer,
    addClassInput,
    addClassFocusedInput,
    addClassBlurredInput,
    type,
    placeholder,
    field,
    form,
    label,
    imgBefore,
    inputStyle,
    wrapperStyle,
    additionalElement,
    maxLength,
    disabled,
    customOnFocus,
    customOnBlur,
    autoComplete,
  } = props;
  const { touched, errors, values } = form;
  const [isFocused, setFocus] = useState(false);

  const inputId = `input-${field.name}`;

  const customHandleFocus = () => {
    if (customOnFocus) customOnFocus();
    setFocus(true);
  };

  const customHandleBlur = e => {
    field.onBlur(e);
    if (customOnBlur) customOnBlur();
    setFocus(false);
  };

  return (
    <div className={`${s.text_input} ${addClassWrapper}`} style={wrapperStyle}>
      <LabelWrapper
        label={label}
        errors={errors}
        touched={touched}
        inputId={inputId}
        field={field}
        addClassLabel={addClassLabel}
      >
        <div
          className={`${s.container} ${addClassInputContainer} ${
            isFocused ? addClassFocusedInput : addClassBlurredInput
          } ${errors.global || (errors[field.name] && touched[field.name]) ? 'error' : null} flex`}
        >
          {imgBefore && (
            <ImageBefore
              src={imgBefore}
              imageWidth={18}
              imageHeight={16}
              addWrapperClass="flex justify-content-center align-items-center absolute"
              style={imgBeforeStyle}
            />
          )}
          <input
            {...field}
            type={type}
            id={inputId}
            className={`${
              errors.global || (errors[field.name] && touched[field.name]) ? 'error-label' : null
            } ${addClassInput}`}
            value={values[field.name]}
            name={field.name}
            placeholder={placeholder}
            style={inputStyle}
            onFocus={customHandleFocus}
            onBlur={customHandleBlur}
            maxLength={maxLength}
            disabled={disabled}
            autoComplete={autoComplete || 'on'}
          />
          {additionalElement}
        </div>
      </LabelWrapper>
    </div>
  );
};

TextInput.propTypes = {
  addClassWrapper: PT.string,
  addClassLabel: PT.string,
  addClassInputContainer: PT.string,
  addClassInput: PT.string,
  addClassFocusedInput: PT.string,
  addClassBlurredInput: PT.string,
  type: PT.string,
  placeholder: PT.string,
  field: PT.object,
  form: PT.object,
  label: PT.string,
  imgBefore: PT.string,
  inputStyle: PT.object,
  wrapperStyle: PT.object,
  touched: PT.object,
  errors: PT.object,
  additionalElement: PT.element,
  maxLength: PT.number,
  disabled: PT.bool,
  customOnFocus: PT.func,
  customOnBlur: PT.func,
  autoComplete: PT.string,
};
