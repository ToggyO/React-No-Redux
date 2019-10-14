import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { ImageBefore } from '@components/Form/ImgBefore';
import { LabelWrapper } from '@components/Form/LabelWrapper';

import mail from '@assets/login_page/email_icon.png';

class PasswordInput extends React.Component {
  state = {
    isPwShown: false,
  };

  showHidePw = () => this.setState(prevState => ({ isPwShown: !prevState.isPwShown }));

  render() {
    const { addClass, field, form, label, imgbefore, inputstyle } = this.props;
    const { touched, errors, values } = form;
    const { isPwShown } = this.state;
    const inputId = `input-${field.name}`;

    return (
      <div className={`${s.wrapper} ${addClass}`}>
        <LabelWrapper label={label} errors={errors} touched={touched} inputId={inputId} field={field}>
          <div
            className={`${s.container} form_border ${
              errors[field.name] && touched[field.name] ? 'error' : null
            } flex`}
          >
            {imgbefore && <ImageBefore src={imgbefore} imageWidth={18} imageHeight={16} />}
            <input
              {...field}
              id={inputId}
              type={isPwShown ? 'text' : 'password'}
              className={`default_input ${errors[field.name] && touched[field.name] ? 'error-label' : null}`}
              value={values[field.name]}
              name={field.name}
              style={inputstyle}
              {...this.props}
            />
            <button type="button" onClick={this.showHidePw}>
              <img src={mail} alt="" />
            </button>
            {/*<button type="button" onClick={this.showHidePw}>*/}
            {/*  <img src={mail} alt="" />*/}
            {/*</button>*/}
          </div>
        </LabelWrapper>
      </div>
    );
  }
}

export default PasswordInput;

PasswordInput.propTypes = {
  addClass: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  imgbefore: PropTypes.string,
  inputstyle: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
};
