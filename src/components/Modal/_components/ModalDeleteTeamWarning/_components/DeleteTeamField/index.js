import React, { useRef } from 'react';
import { Field, Form, Formik } from 'formik';
import PT from 'prop-types';

import s from '../../style.module.sass';

import { TextInput } from '@components/Form/TextInput';
import { validateField } from '@components/Form/validations';
import { ApplyButton, PrimaryColorOutlinedButton } from '@components/StyledComponents/Buttons';

export const DeleteTeamField = ({ modalContent, deleteTeamButton, onClose, itemKey }) => {
  const formikRef = useRef(null);

  return (
    <Formik
      ref={formikRef}
      initialValues={{ keyWord: '' }}
      onSubmit={() => {}}
      render={({ errors, touched, isValid }) => (
        <Form>
          <div className={`${s.input} ${modalContent ? s.input_shown : ''}`}>
            <Field
              type="text"
              name="keyWord"
              placeholder="Type here"
              component={TextInput}
              validate={validateField.keyWordDelete}
              addClassLabel="label_settings"
              addClassWrapper="pt-10"
              addClassInputContainer="form_background"
              addClassInput="default_input input_settings pt-2 pb-2 pl-3 pr-3"
              addClassFocusedInput="form_border_focus form_border_rounded"
              addClassBlurredInput="form_border form_border_rounded"
              maxLength={20}
              autoComplete="off"
            />
            <div style={{ height: 20 }} className="formik-error error-label pt-2 text-align-center">
              {errors.keyWord && touched.keyWord ? errors.keyWord : ''}
            </div>
          </div>
          <div className={s.button_block}>
            <PrimaryColorOutlinedButton
              type="button"
              className={`${s.cancel} btn rounded full_width pt-4 pb-4 mb-0`}
              onClick={() => onClose(itemKey)}
            >
              Close
            </PrimaryColorOutlinedButton>
            <ApplyButton
              type="button"
              className={`${s.apply} btn rounded full_width pt-4 pb-4 mb-0 ml-10`}
              onClick={deleteTeamButton}
              disabled={modalContent && !isValid}
            >
              Delete team
            </ApplyButton>
          </div>
        </Form>
      )}
    />
  );
};

DeleteTeamField.propTypes = {
  modalContent: PT.bool,
  deleteTeamButton: PT.func,
  onClose: PT.func,
  itemKey: PT.string,
};
