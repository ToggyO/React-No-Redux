import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { UserProfileFormView } from './_components/UserProfileForm';

const UserProfileView = ({
  userData,
}) => (
  <div className={s.container}>
    <div className={s.headline}>
      <h4>Profile</h4>
    </div>
    <div className={`${s.form} flex`}>
      <UserProfileFormView userData={userData}/>
      <div style={{ width: 120, backgroundColor: 'lightgray' }}/>
    </div>
  </div>
);

UserProfileView.propTypes = {
  userData: PT.oneOfType([
    PT.object,
    PT.arrayOf(PT.object),
  ]),
};

export default UserProfileView;
