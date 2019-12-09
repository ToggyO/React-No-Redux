import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { UserProfileFormView } from './_components/UserProfileForm';

const UserProfileView = ({
  userData,
}) => (
  <div className={s.container}>
    <div className={`${s.headline} pt-8`}>
      <h4>Profile</h4>
    </div>
    <div className={`${s.form} flex`}>
      <div className={s.form_edit}>
        <UserProfileFormView userData={userData}/>
      </div>
      <div style={{ paddingLeft: 40, paddingRight: 10, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '120px', height: '100%', backgroundColor: 'lightgray' }}/>
      </div>
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
