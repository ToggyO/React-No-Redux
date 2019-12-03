import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import { UserProfileSidebarCompanyView } from './_components/UserProfileSidebarCompany';
import { UserProfileSidebarUserView } from './_components/UserProfileSidebarUser';
import { UserProfileSidebarLogoView } from './_components/UserProfileSidebarLogo';
import { UserProfileSidebarHeadlinesWrapper } from './_components/UserProfileSidebarHealinesWrapper';
import { UserProfileSidebarTeamsView } from './_components/UserProfileSidebarTeams';

import CustomScrollbar from '@components/Scrollbar';


const UserProfileSidebarView = ({
  companies = [ 'Test4', 'Test3', 'Test2', 'Test'],
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
      color: 'blue',
    },
    {
      title: 'Team4',
      color: 'orange',
    },
    {
      title: 'Team5',
      color: 'orange',
    },
    {
      title: 'Team6',
      color: 'orange',
    },
    {
      title: 'Team7',
      color: 'orange',
    },
    {
      title: 'Team8',
      color: 'orange',
    },
    {
      title: 'Team9',
      color: 'orange',
    },
    {
      title: 'Team10',
      color: 'orange',
    },
    {
      title: 'Team11',
      color: 'orange',
    },
    {
      title: 'Team12',
      color: 'orange',
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
            <CustomScrollbar
              style={{ height: 100 }}
              autoHide
              universal
              thumbStyleHorizontal={{
                backgroundColor: '#6D768A',
                height: 4,
                borderRadius: 2,
              }}
              thumbStyleVertical={{
                backgroundColor: '#6D768A',
                width: 4,
                borderRadius: 2,
              }}
            >
              <UserProfileSidebarCompanyView companies={companies}/>
            </CustomScrollbar>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
        <div className={s.user}>
          <UserProfileSidebarHeadlinesWrapper title="User" addContainerClass="mb-2 mt-5">
            <UserProfileSidebarUserView/>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
        <div className={s.teams}>
          <UserProfileSidebarHeadlinesWrapper title="Teams">
            <CustomScrollbar
              autoHide
              universal
              autoHeight
              autoHeightMax={320}
              thumbStyleHorizontal={{
                backgroundColor: '#6D768A',
                height: 4,
                borderRadius: 2,
              }}
              thumbStyleVertical={{
                backgroundColor: '#6D768A',
                width: 4,
                borderRadius: 2,
              }}
            >
              {teams.map(item => (
                <UserProfileSidebarTeamsView
                  key={item.title}
                  color={item.color}
                  teamName={item.title}
                />)
              )}
              <div className={`${s.add_button}`}>
                <button
                  type="button"
                  className="btn mt-0 mb-0 pt-4 pb-4 pl-10 full_width text-align-left"
                  onClick={() => console.log('clicked')}
                >
                  + Add project
                </button>
              </div>
            </CustomScrollbar>
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
