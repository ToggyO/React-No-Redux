import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { UserProfileSidebarCompanyView } from './_components/UserProfileSidebarCompany';
import { UserProfileSidebarUserView } from './_components/UserProfileSidebarUser';
import { UserProfileSidebarLogoView } from './_components/UserProfileSidebarLogo';
import { UserProfileSidebarHeadlinesWrapper } from './_components/UserProfileSidebarHealinesWrapper';
import { UserProfileSidebarTeamsView } from './_components/UserProfileSidebarTeams';


const UserProfileSidebarView = ({
  companies = ['Test2', 'Test'],
  teams = [
    {
      title: 'Team',
      color: 'orange',
    },
    {
      title: 'Team2',
      color: 'green',
    },
    {
      title: 'Team3',
      color: 'light-blue',
    },
  ],
}) => (
  <>
    <div className={`${s.wrapper} pr-6`}>
      <div className={`${s.container}`}>
        <div className={`${s.logo_container} pt-8 pb-8 flex justify-content-center align-items-center`}>
          <UserProfileSidebarLogoView/>
        </div>
        <div className={s.company}>
          <UserProfileSidebarHeadlinesWrapper title="Company">
            <UserProfileSidebarCompanyView companies={companies}/>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
        <div className={s.user}>
          <UserProfileSidebarHeadlinesWrapper title="User">
            <UserProfileSidebarUserView/>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
        <div className={s.teams}>
          <UserProfileSidebarHeadlinesWrapper title="Teams">
            {teams.map(item => (
              <UserProfileSidebarTeamsView
                key={item.title}
                color={item.color}
                teamName={item.title}
              />)
            )}
          </UserProfileSidebarHeadlinesWrapper>
        </div>
      </div>
    </div>
  </>
);

UserProfileSidebarView.propTypes = {
  companies: PT.array,
  teams: PT.array,
};

export default UserProfileSidebarView;
