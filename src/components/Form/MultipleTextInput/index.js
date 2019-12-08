import React, { useRef, useState } from 'react';
import PT from 'prop-types';

import { AddButton } from '@components/Form/AddButton';
import { RenderListDelete } from '@components/Form/RenderListDelete';
import { ImageBefore } from '@components/Form/ImgBefore';
import { LabelWrapper } from '@components/Form/LabelWrapper';
import s from '@components/Form/TextInput/style.module.sass';
import CustomScrollbar from '@components/Scrollbar';

export const MultipleTextInput = props => {
  const {
    addClassWrapper,
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
    additionalElement,
    ...rest
  } = props;
  const { touched, errors, values, setFieldValue, setFieldError } = form;
  const inputId = `input-${field.name}`;

  const inputRef = useRef(null);
  const [isFocused, setFocus] = useState(false);

  const customHandleFocus = () => setFocus(true);

  const customHandleBlur = e => {
    field.onBlur(e);
    setFocus(false);
  };

  return (
    <div className={`${s.text_input} ${addClassWrapper}`}>
      <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
        <div
          className={`${s.container} ${addClassInputContainer} ${
            isFocused ? addClassFocusedInput : addClassBlurredInput
          } ${errors[field.name] && touched[field.name] ? 'error' : null} flex`}
        >
          {imgBefore && <ImageBefore src={imgBefore} imageWidth={18} imageHeight={16} />}
          <input
            {...field}
            ref={inputRef}
            type={type}
            id={inputId}
            className={`${errors[field.name] && touched[field.name] ? 'error-label' : null} ${addClassInput}`}
            value={values[field.name]}
            name={field.name}
            placeholder={placeholder}
            style={inputStyle}
            multiple
            onFocus={customHandleFocus}
            onBlur={customHandleBlur}
          />
          <AddButton
            values={values}
            fieldName={field.name}
            setFieldValue={setFieldValue}
            setFieldError={setFieldError}
            addButtonClass="btn mr-3"
            errors={errors}
            touched={touched}
            {...rest}
          />
          {additionalElement}
        </div>
      </LabelWrapper>
      <CustomScrollbar
        style={{ maxHeight: 200, maxWidth: 499, marginTop: 16 }}
        universal
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        thumbStyleHorizontal={{
          backgroundColor: '#6D768A',
          height: 4,
          borderRadius: 2,
        }}
        thumbStyleVertical={{
          backgroundColor: '#6D768A',
          width: 4,
          borderRadius: 2,
        }}
      >
        <div className={`${s.mapped_emails}`}>
          {rest.emails.map((item, i) => (
            <RenderListDelete
              key={item}
              arrayIndex={i}
              email={item}
              addContainerClass="flex pt-2 pb-2"
              addDeleteButtonClass="pl-2 pr-2"
              addIconClass="fill-secondary"
              style={rest.renderListStyle}
              icon={rest.renderListIcon}
              {...rest}
            />
          ))}
        </div>
      </CustomScrollbar>
    </div>
  );
};

MultipleTextInput.propTypes = {
  addClassWrapper: PT.string,
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
  touched: PT.object,
  errors: PT.object,
  additionalElement: PT.element,
  multiple: PT.bool,
};
