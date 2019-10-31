import React, { useEffect, useState } from 'react';
import PT from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { style as renderListStyle } from '../../../SetTeamPage/_components/SetTeamForm/emails_list_style';

import { style } from './radio_button_style';

import s from '@components/Form/TextInput/style.module.sass';
import { getUniqueKey } from '@utils/index';
import { RenderListAdd } from '@components/Form/RenderListAdd';

// import { responseFormikError } from '@utils/index';
//
// import { ERROR_CODES } from '@config/errorCodes';

import { ColorSelect } from '@components/Form/Dropdown/ColorSelect';
import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { RadioButtonGroup } from '@components/Form/RadioButton';
import { RadioButton } from '@components/Form/RadioButton/_components';
import { Preloader } from '@components/Preloader';
import api from '@services/api';

const YourTeamRadioButton = props => (
  <RadioButton {...props} withExtra={{ icon: 'team', text: 'Your team' }} />
);

const PeopleRadioButton = props => (
  <RadioButton {...props} withExtra={{ icon: 'people', text: 'Select people' }} />
);

const FirstProjectFormView = ({ setFirstProjectRequest, ...rest }) => {
  const [fetching, setFetching] = useState(false);
  const [emails, setEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);

  const fetchTeamEmails = async () => {
    setFetching(true);
    const { data } = await api.other.getTeamEmails();
    setEmails(data);
    debugger;
    setFetching(false);
  };

  const handleSelectEmail = email => {
    const index = selectedEmails.indexOf(email);
    // eslint-disable-next-line no-bitwise
    if (!~index) return setSelectedEmails(prevEmails => [...prevEmails, email]);
    return setSelectedEmails(prevEmails => prevEmails.filter(prevEmail => prevEmail !== email));
  };

  const handleSubmit = values => {
    const { name, hexColor, radioGroup } = values;

    let dataToSubmit = { name, hexColor };

    if (radioGroup === 'projectTeam') {
      dataToSubmit = { ...dataToSubmit, emails };
    }
    if (radioGroup === 'projectPeople') {
      dataToSubmit = { ...dataToSubmit, emails: selectedEmails };
    }
    setFirstProjectRequest(dataToSubmit);
  };

  useEffect(() => {
    fetchTeamEmails();
  }, []);

  return (
  // const formikRef = useRef(null);
  //
  // useEffect(() => {
  //   formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
  // }, [errorsFromBackend]);

    <Formik
      initialValues={{ name: '', radioGroup: 'projectTeam', hexColor: '#82ABFB' }}
      onSubmit={handleSubmit}
      render={({ isValid, values }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Enter project name"
              component={TextInput}
              validate={validateField.name}
              addClassWrapper="pt-4 pb-4 mb-3"
              addClassInput="pt-4 pb-4 pl-5"
              additionalElement={<ColorSelect values={values} />}
            />
            <ErrorMessage name="project" component="div" className="formik-error error-label" />
          </div>

          <RadioButtonGroup
            label="Share the project with"
            labelStyle={{ fontSize: 15, lineHeight: '21px', fontWeight: 400, color: '#495570' }}
            addLabelClass="text-align-left mb-1"
            addChildrenContainerClass="flex justify-content-space-between relative mb-4"
          >
            <Preloader
              addClassImage="h-66"
              addClassPreloader={fetching ? 'flex justify-content-center align-items-center' : 'display-none'}
              addClassChildren="flex justify-content-center align-items-center"
            />
            <Field name="radioGroup" id="projectTeam" component={YourTeamRadioButton} style={style} />
            <Field name="radioGroup" id="projectPeople" component={PeopleRadioButton} style={style} />
          </RadioButtonGroup>

          <div className={`${s.mapped_emails} mt-3`}>
            {values.radioGroup === 'projectPeople' &&
              emails.map((item, i) =>
                <RenderListAdd
                  key={item}
                  arrayIndex={i}
                  email={item}
                  state={selectedEmails.includes(item)}
                  addContainerClass="flex pt-2 pb-2"
                  addDeleteButtonClass="pl-2 pr-2"
                  addIconFillClass="fill-light-gray"
                  onClick={() => handleSelectEmail(item)}
                  style={renderListStyle}
                  icon="accept"
                  {...rest}
                />
              )
            }
          </div>

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
};
export default FirstProjectFormView;

FirstProjectFormView.propTypes = {
  setFirstProjectRequest: PT.func,
};
