import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { style, style2 } from './radio_button_style';

import { FormTemplateView } from '@components/Form/FormTemplate';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { RadioButtonGroup } from '@components/Form/RadioButton';
import { RadioButton } from '@components/Form/RadioButton/_components';


const FirstProjectFormView = () => (
  <FormTemplateView
    titleLarge="Let’s set up your first project"
    titleSmall="Projects will contain your folders, board and tasks."
  >
    <Formik
      initialValues={{ project: '', radioGroup: 'projectTeam' }}
      onSubmit={() => {}}
      render={({ isValid }) => (
        <Form>
          <Field
            type="text"
            name="project"
            placeholder="Enter project name"
            component={TextInput}
            validate={validateField.name}
            addClassWrapper="pt-4 pb-4"
            addClassInput="pt-4 pb-4 pl-5"
          />
          <ErrorMessage name="project" component="div" className="formik-error error-label" />
          <RadioButtonGroup
            label="Share the project with"
            labelStyle={{ fontSize: 15, lineHeight: '21px', fontWeight: 400, color: '#495570' }}
            addLabelClass="text-align-left"
            addChildrenContainerClass="flex"
          >
            <Field
              name="radioGroup"
              id="projectTeam"
              component={RadioButton}
              style={style}
            />
            <Field
              name="radioGroup"
              id="projectPeople"
              component={RadioButton}
              style={style}
            />
          </RadioButtonGroup>
          <button
            type="submit"
            disabled={!isValid}
            className="btn green rounded p-4 full_width login-page-button"
          >
              Next
          </button>
        </Form>
      )}
    />
  </FormTemplateView>
);

export default FirstProjectFormView;
