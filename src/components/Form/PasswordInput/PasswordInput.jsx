import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { ImageBefore } from '@components/Form/ImgBefore';
import { LabelWrapper } from '@components/Form/LabelWrapper';

class PasswordInput extends React.Component {
  state = {
    isPwShown: false,
  };

  showHidePw = () => this.setState(prevState => ({ isPwShown: !prevState.isPwShown }));

  render() {
    const { addClassWrapper, addClassInput, placeholder, field, form, label, imgBefore } = this.props;
    const { touched, errors, values } = form;
    const { isPwShown } = this.state;
    const inputId = `input-${field.name}`;

    return (
      <div className={`${s.wrapper} ${addClassWrapper}`}>
        <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
          <div
            className={`${s.container} form_border ${
              errors[field.name] && touched[field.name] ? 'error' : ''
            } flex`}
          >
            {imgBefore && <ImageBefore src={imgBefore} imageWidth={18} imageHeight={16} />}
            <input
              {...field}
              id={inputId}
              type={isPwShown ? 'text' : 'password'}
              className={`default_input ${
                errors[field.name] && touched[field.name] ? 'error-label' : ''
              } ${addClassInput}`}
              value={values[field.name]}
              name={field.name}
              placeholder={placeholder}
            />
            <input
              type="checkbox"
              onClick={this.showHidePw}
              className={`${s.show_password} ${isPwShown ? s.checked : ''}`}
            />
          </div>
        </LabelWrapper>
      </div>
    );
  }
}

export default PasswordInput;

PasswordInput.propTypes = {
  addClassWrapper: PropTypes.string,
  addClassInput: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  imgBefore: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
