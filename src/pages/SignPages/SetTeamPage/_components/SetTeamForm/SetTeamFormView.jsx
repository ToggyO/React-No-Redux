import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { FormTemplateView } from '@components/Form/FormTemplate';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';

const handleSubmit = (values, errors) => {
  console.log('submitting');
};

const SetTeamFormView = () => (
  <FormTemplateView
    titleLarge="Set up a team with your colleagues"
    titleSmall="Invite as many as you like, or continue by yourself."
  >
    <Formik
      initialValues={{ teamName: '', email: '' }}
      onSubmit={handleSubmit}
      render={props => (
        <>
          {JSON.stringify(props, null, 2)}
          <Form>
            <Field
              type="text"
              name="teamName"
              placeholder="Enter a team name"
              component={TextInput}
              validate={validateField.name}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4 pl-5 pr-5"
            />
            <ErrorMessage name="teamName" component="div" className="formik-error error-label" />
            <Field
              type="email"
              name="email"
              placeholder="Enter email to send invite"
              component={TextInput}
              validate={validateField.email}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4 pl-5 pr-5"
            />
            <ErrorMessage name="email" component="div" className="formik-error error-label" />
            <button
              type="submit"
              disabled={!props.isValid}
              className="btn green rounded p-4 full_width login-page-button"
            >
              Next
            </button>
          </Form>
        </>
      )}
    />
  </FormTemplateView>
);
export default SetTeamFormView;
