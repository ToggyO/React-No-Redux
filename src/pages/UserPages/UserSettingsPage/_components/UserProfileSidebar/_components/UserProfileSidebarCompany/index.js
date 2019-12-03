import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

export const UserProfileSidebarCompanyView = ({ companies }) => (
  <>
    <div className={`${s.wrapper}`}>
      <div className={`${s.container} flex flex-column pl-10 pt-2`}>
        {companies.map(item => (
          <div key={item} className={s.company_item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </>
);

UserProfileSidebarCompanyView.propTypes = {
  companies: PT.array,
};
