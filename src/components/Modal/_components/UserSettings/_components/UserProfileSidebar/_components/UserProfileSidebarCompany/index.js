import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

import s from './style.module.sass';

import { ROUTES } from '@config/routes';

export const UserProfileSidebarCompanyView = ({ parsedPathname }) => {
  const userId = parsedPathname[1];

  return (
    <div className={`${s.container} pb-10`}>
      <div className={`${s.link_container} pl-10 flex flex-column`}>
        <NavLink
          to={`${ROUTES.USER.ROOT}/${userId}${ROUTES.USER.PROFILE}`}
          className={s.link}
          activeClassName={s.selected}
        >
          Billing
        </NavLink>
        <NavLink
          to={`${ROUTES.USER.ROOT}/${userId}${ROUTES.USER.PREFERENCES}`}
          className={s.link}
          activeClassName={s.selected}
        >
          Manage users
        </NavLink>
      </div>
    </div>
  );
};

UserProfileSidebarCompanyView.propTypes = {
  parsedPathname: PT.object,
};
