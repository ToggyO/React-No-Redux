import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from '@utils/index';
import { AddButton } from '@components/Form/AddButton';
import { RenderList } from '@components/Form/RenderList';
import { ImageBefore } from '@components/Form/ImgBefore';
import { LabelWrapper } from '@components/Form/LabelWrapper';
import s from '@components/Form/TextInput/style.module.sass';


const MultipleTextInput = props => {
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
    ...rest
  } = props;
  const { touched, errors, values, setFieldValue, setFieldError } = form;
  const inputId = `input-${field.name}`;

  const inputRef = useRef(null);
  const divRef = useRef(null);

  return (
    <div className={`${s.text_input} ${addClassWrapper}`}>
      <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
        <div
          ref={divRef}
          className={`${s.container} form_border ${
            errors[field.name] && touched[field.name] ? 'error' : null
          } flex`}
        >
          {imgBefore && <ImageBefore src={imgBefore} imageWidth={18} imageHeight={16}/>}
          <input
            {...field}
            ref={inputRef}
            type={type}
            id={inputId}
            className={`default_input ${
              errors[field.name] && touched[field.name] ? 'error-label' : null
            } ${addClassInput}`}
            value={values[field.name]}
            name={field.name}
            placeholder={placeholder}
            style={inputStyle}
            multiple
            onFocus={() => divRef.current.classList.add('form_border_focus')}
            onBlur={() => divRef.current.classList.remove('form_border_focus')}
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
      <div className={s.mapped_emails}>
        {rest.emails.map((item, i) =>
          <RenderList
            key={getUniqueKey()}
            arrayIndex={i}
            email={item}
            addContainerClass="flex"
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

MultipleTextInput.propTypes = {
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

export default MultipleTextInput;
