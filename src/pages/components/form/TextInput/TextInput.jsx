import React from 'react';
import PropTypes from 'prop-types';

import { ImageBefore } from '../ImgBefore';
import { LabelWrapper } from '../LabelWrapper';

import s from './style.module.sass';

const TextInput = (props) => {
  const {
    field,
    form,
    label,
    imgbefore,
  } = props;
  const {
    touched,
    errors,
    values,
  } = form;

  const inputId = `input-${field.name}`;

  return (
    <div className={`${s.text_input} mt-4 mb-4`}>
      <LabelWrapper
        label={label}
        errors={errors}
        touched={touched}
        inputId={inputId}
        field={field}
      >
        <div className={`${s.container} form_border ${errors[field.name] && touched[field.name] ? 'error' : null} flex`}>
          {imgbefore && <ImageBefore src={imgbefore} imageWidth={18} imageHeight={16}/>}
          <input
            {...field}
            className={`default_input pb-4 pt-4 ${errors[field.name] && touched[field.name] ? 'error-label' : null}`}
            value={values[field.name]}
            name={field.name}
            {...props}
          />
        </div>
      </LabelWrapper>
    </div>
  );
};

export default TextInput;

TextInput.propTypes ={
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  imgbefore: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
