import React, { useEffect, useRef } from 'react';
import PT from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { responseFormikError } from '@utils/index';
import { ERROR_CODES } from '@config/errorCodes';
import { ColorSelect } from '@components/Form/Dropdown/ColorSelect';
import { MultipleTextInput } from '@components/Form/MultipleTextInput';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';


const SetTeamFormView = ({ errorsFromBackend, setTeam }) => {
  const formikRef = useRef(null);

  useEffect(() => {
    formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  }, [errorsFromBackend]);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ teamName: '', email: '', color: '#82ABFB' }}
      onSubmit={setTeam}
      render={({ isValid, values }) => (
        <>
          {/* {JSON.stringify(props, null, 2)} */}
          <Form>
            <Field
              type="text"
              name="teamName"
              placeholder="Enter a team name"
              component={TextInput}
              validate={validateField.name}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4 pl-5 pr-5"
              additionalElement={<ColorSelect values={values}/>}
            />
            <ErrorMessage name="teamName" component="div" className="formik-error error-label" />
            <Field
              type="email"
              name="email"
              placeholder="Enter email to send invite"
              component={MultipleTextInput}
              validate={validateField.email}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4 pl-5 pr-5"
              multiple
            />
            <ErrorMessage name="email" component="div" className="formik-error error-label" />
            <button
              type="submit"
              disabled={!isValid}
              className="btn green rounded p-4 full_width login-page-button"
            >
              Next
            </button>
          </Form>
        </>
      )}
    />
  )
};

SetTeamFormView.propTypes = {
  errorsFromBackend: PT.arrayOf(PT.object),
  setTeam: PT.func,
};

export default SetTeamFormView;
