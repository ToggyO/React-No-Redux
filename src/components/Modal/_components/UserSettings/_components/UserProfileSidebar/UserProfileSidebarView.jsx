import React from 'react';
import PT from 'prop-types';

import s from './style.module.sass';
import { style as teamsStyle } from './teams_style';

import { UserProfileSidebarCompanyView } from './_components/UserProfileSidebarCompany';
import { UserProfileSidebarUserView } from './_components/UserProfileSidebarUser';
import { UserProfileSidebarLogoView } from './_components/UserProfileSidebarLogo';
import { UserProfileSidebarHeadlinesWrapper } from './_components/UserProfileSidebarHealinesWrapper';
import { UserProfileSidebarTeamsView } from './_components/UserProfileSidebarTeams';
import { UserTeamsPlaceholder } from './_components/UserProfileSidebarTeams/UserTeamsPlaceholder';

import CustomScrollbar from '@components/Scrollbar';
import { getUniqueKey } from '@utils/index';
import {
  ModalColorButton,
  ModalSecondaryColorBlock,
} from '@components/StyledComponents/ColorBlocks';

const teamsPlaceholder = [...Array(4)];

/* eslint-disable */
const UserProfileSidebarView = ({
  parsedPathname,
  companies = [ 'Test4', 'Test3', 'Test2', 'Test'],
  teams = [],
  currentTab,
  setTab,
  ...rest
}) => (
  <>
    <ModalSecondaryColorBlock className={`${s.wrapper} pr-6`}>
      <div className={`${s.container}`}>
        <div className={`${s.logo_container} pt-8 pb-8 flex justify-content-center align-items-center`}>
          <UserProfileSidebarLogoView/>
        </div>
        <div className={s.company}>
          <UserProfileSidebarHeadlinesWrapper title="Company" addContainerClass="mb-2">
            <UserProfileSidebarCompanyView setTab={setTab} currentTab={currentTab}/>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
        <div className={s.user}>
          <UserProfileSidebarHeadlinesWrapper title="User" addContainerClass="mb-2">
            <UserProfileSidebarUserView setTab={setTab} currentTab={currentTab}/>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
        <div className={s.teams}>
          <UserProfileSidebarHeadlinesWrapper title="Teams">
            <CustomScrollbar
              autoHide
              universal
              autoHeight
              autoHeightMax={380}
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
              {!rest.teamsLoader
                ? teamsPlaceholder.map(item => <UserTeamsPlaceholder key={getUniqueKey()}/>)
                : teams.map(item => (
                    <UserProfileSidebarTeamsView
                      key={item.team.name}
                      color={item.team.colorHex}
                      teamName={item.team.name}
                      addClassContainer="pl-10 pt-4 pb-4"
                      addClassCircle="flex justify-content-center align-items-center"
                      addClassHeadline="ml-3 flex justify-content-space-between align-items-center relative"
                      style={teamsStyle}
                      onClick={() => {
                        rest.setTeam(item.teamId);
                        setTab('Teams');
                      }}
                    />)
              )}
              <div className={`${s.add_button}`}>
                <ModalColorButton
                  type="button"
                  className="btn mt-0 mb-0 pt-4 pb-4 pl-10 full_width text-align-left"
                  onClick={() => console.log('clicked')}
                >
                  + Add team
                </ModalColorButton>
              </div>
            </CustomScrollbar>
          </UserProfileSidebarHeadlinesWrapper>
        </div>
      </div>
    </ModalSecondaryColorBlock>
  </>
);

UserProfileSidebarView.propTypes = {
  parsedPathname: PT.object,
  companies: PT.array,
  teams: PT.array,
  setTab: PT.func,
};

export default UserProfileSidebarView;
// teams = [
//   {
//     title: 'Team',
//     color: 'orange',
//   },
//   {
//     title: 'Team2',
//     color: 'green',
//   },
//   {
//     title: 'Team3',
//     color: 'blue',
//   },
//   {
//     title: 'Team4',
//     color: 'orange',
//   },
//   {
//     title: 'Team5',
//     color: 'orange',
//   },
//   {
//     title: 'Team6',
//     color: 'orange',
//   },
//   {
//     title: 'Team7',
//     color: 'orange',
//   },
//   {
//     title: 'Team8',
//     color: 'orange',
//   },
//   {
//     title: 'Team9',
//     color: 'orange',
//   },
//   {
//     title: 'Team10',
//     color: 'orange',
//   },
//   {
//     title: 'Team11',
//     color: 'orange',
//   },
//   {
//     title: 'Team12',
//     color: 'orange',
//   },
// ],
