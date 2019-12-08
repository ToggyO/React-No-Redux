import React from 'react';
import PT from 'prop-types';

import { style as imgBeforeStyle } from '../TextInput/img_before_style';

import s from './style.module.sass';

import { ImageBefore } from '@components/Form/ImgBefore';
import { LabelWrapper } from '@components/Form/LabelWrapper';
import { Checkbox } from '@components/Form/Checkbox';
import { style } from '@pages/LoginPages/SetNewPasswordPage/_components/SetPasswordForm/checkbox_style';

export class PasswordInput extends React.Component {
  state = {
    isPwShown: false,
    isFocused: false,
  };

  showHidePw = () => this.setState(prevState => ({ ...prevState, isPwShown: !prevState.isPwShown }));

  customHandleFocus = () => this.setState(prevState => ({ ...prevState, isFocused: true }));

  customHandleBlur = e => {
    this.props.field.onBlur(e);
    this.setState(prevState => ({ ...prevState, isFocused: false }));
  };

  render() {
    const {
      addClassWrapper,
      addClassInputContainer,
      addClassInput,
      addClassFocusedInput,
      addClassBlurredInput,
      placeholder,
      field,
      form,
      label,
      imgBefore,
    } = this.props;
    const { touched, errors, values } = form;
    const { isPwShown, isFocused } = this.state;
    const inputId = `input-${field.name}`;

    return (
      <div className={`${s.wrapper} ${addClassWrapper}`}>
        <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
          <div
            className={`${s.container} ${addClassInputContainer} ${
              isFocused ? addClassFocusedInput : addClassBlurredInput
            }  ${errors.global || (errors[field.name] && touched[field.name]) ? 'error' : ''} flex`}
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
              id={inputId}
              type={isPwShown ? 'text' : 'password'}
              className={` ${addClassInput} ${
                errors.global || (errors[field.name] && touched[field.name]) ? 'error-label' : ''
              }`}
              value={values[field.name]}
              name={field.name}
              placeholder={placeholder}
              onFocus={this.customHandleFocus}
              onBlur={this.customHandleBlur}
              autoComplete="on"
            />
            <Checkbox
              state={isPwShown}
              addClassTitleWrapper="flex justify-content-center align-items-center pr-5"
              addClassCheckbox="checkbox"
              icon="show-password"
              iconChecked="hide-password"
              style={style}
              onClick={this.showHidePw}
            />
            {/* <Checkbox */}
            {/*  addClassTitleWrapper="flex justify-content-center align-items-center pr-5" */}
            {/*  addClassCheckbox={`checkbox ${isPwShown ? 'hide-password' : 'show-password'}`} */}
            {/*  style={style} */}
            {/*  onClick={this.showHidePw} */}
            {/* /> */}
          </div>
        </LabelWrapper>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  addClassWrapper: PT.string,
  addClassInputContainer: PT.string,
  addClassInput: PT.string,
  addClassFocusedInput: PT.string,
  addClassBlurredInput: PT.string,
  placeholder: PT.string,
  field: PT.object,
  form: PT.object,
  label: PT.string,
  type: PT.string,
  imgBefore: PT.string,
  touched: PT.object,
  errors: PT.object,
};
