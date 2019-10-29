import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { ImageBefore } from '@components/Form/ImgBefore';
import { LabelWrapper } from '@components/Form/LabelWrapper';
import { Checkbox } from '@components/Form/Checkbox';
import { style } from '@pages/SignPages/EnterNamePage/_components/EnterNameForm/checkbox_style';

class PasswordInput extends React.Component {
  state = {
    isPwShown: false,
  };

  inputRef = React.createRef();

  showHidePw = () => this.setState(prevState => ({ isPwShown: !prevState.isPwShown }));

  customHandleBlur = (e) => {
    this.props.field.onBlur(e);
    this.inputRef.current.classList.remove('form_border_focus')
  };

  render() {
    const { addClassWrapper, addClassInput, placeholder, field, form, label, imgBefore } = this.props;
    const { touched, errors, values } = form;
    const { isPwShown } = this.state;
    const inputId = `input-${field.name}`;

    return (
      <div className={`${s.wrapper} ${addClassWrapper}`}>
        <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
          <div
            ref={this.inputRef}
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
              onFocus={() => this.inputRef.current.classList.add('form_border_focus')}
              onBlur={this.customHandleBlur}
            />
            <Checkbox
              addClassTitleWrapper="flex justify-content-center align-items-center pr-5"
              addClassCheckbox={`checkbox ${isPwShown ? 'checkmark_checked' : ''}`}
              title="Show"
              style={style}
              onClick={this.showHidePw}
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
