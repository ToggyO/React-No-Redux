import React, { useEffect, useRef } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { style } from './radio_button_style';

import { responseFormikError } from '@utils/index';

import { ERROR_CODES } from '@config/errorCodes';

import { ColorSelect } from '@components/Form/Dropdown/ColorSelect';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { RadioButtonGroup } from '@components/Form/RadioButton';
import { RadioButton } from '@components/Form/RadioButton/_components';

const FirstProjectFormView = () => (
  // const formikRef = useRef(null);
  //
  // useEffect(() => {
  //   formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  // }, [errorsFromBackend]);

  <Formik
    initialValues={{ project: '', radioGroup: 'projectTeam', color: '#82ABFB' }}
    onSubmit={values => {
      console.log(values);
    }}
    render={({ isValid, values }) => (
      <Form>
        <div>
          <Field
            type="text"
            name="project"
            placeholder="Enter project name"
            component={TextInput}
            validate={validateField.name}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4 pl-5"
            additionalElement={<ColorSelect values={values} />}
          />
          <ErrorMessage name="project" component="div" className="formik-error error-label" />
        </div>
        <RadioButtonGroup
          label="Share the project with"
          labelStyle={{ fontSize: 15, lineHeight: '21px', fontWeight: 400, color: '#495570' }}
          addLabelClass="text-align-left"
          addChildrenContainerClass="flex"
        >
          <Field name="radioGroup" id="projectTeam" component={RadioButton} style={style} />
          <Field name="radioGroup" id="projectPeople" component={RadioButton} style={style} />
        </RadioButtonGroup>
        <button
          type="submit"
          disabled={!isValid}
          className="btn green-filled rounded p-4 full_width login-page-button"
        >
          Next
        </button>
      </Form>
    )}
  />
);
export default FirstProjectFormView;
