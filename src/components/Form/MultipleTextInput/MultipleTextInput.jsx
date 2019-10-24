import TextInput from '@components/Form/TextInput/TextInput';
import PropTypes from 'prop-types';
import React from 'react';

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
  } = props;
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
          />
          {additionalElement}
        </div>
      </LabelWrapper>
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