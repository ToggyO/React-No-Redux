import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { UserProfileFormView } from './_components/UserProfileForm';
import { UserProfileAvatarContainer } from './_components/UserProfileAvatar';


const UserProfileView = ({
  userData,
  isDataFetched,
  isUserUpdating,
  updateUserData,
  modalOpen,
}) => (
  <div className={s.container}>
    <div className={`${s.headline} pt-8`}>
      <h4>Profile</h4>
    </div>
    <div className={`${s.form} flex`}>
      <div className={s.form_edit}>
        <UserProfileFormView
          userData={userData}
          isDataFetched={isDataFetched}
          isUserUpdating={isUserUpdating}
          updateUserData={updateUserData}
          modalOpen={modalOpen}
        />
      </div>
      <UserProfileAvatarContainer
        userData={userData}
      />
    </div>
  </div>
);

UserProfileView.propTypes = {
  userData: PT.object,
  isDataFetched: PT.bool,
  isUserUpdating: PT.bool,
  updateUserData: PT.func,
  modalOpen: PT.func,
};

export default UserProfileView;
