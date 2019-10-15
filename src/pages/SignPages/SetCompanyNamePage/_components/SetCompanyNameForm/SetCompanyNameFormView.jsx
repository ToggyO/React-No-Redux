import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { FormTemplateView } from '@components/Form/FormTemplate';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';

const handleSubmit = values => {
  console.log(values);
  console.log('Submitting...');
};

const SetCompanyNameForm = () => (
  <FormTemplateView
    titleLarge="What's the name of your company?"
    titleSmall="You can split up the company into teams later."
  >
    <Formik
      initialValues={{ companyName: '' }}
      onSubmit={handleSubmit}
      render={props => (
        <>
          {JSON.stringify(props, null, 2)}
          <Form>
            <Field
              type="text"
              name="companyName"
              placeholder="Enter a name"
              component={TextInput}
              validate={validateField.name}
              addClassWrapper="pt-4 pb-4"
              addClassInput="pt-4 pb-4 pl-5 pr-5"
            />
            <ErrorMessage name="companyName" component="div" className="formik-error error-label" />
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

export default SetCompanyNameForm;
