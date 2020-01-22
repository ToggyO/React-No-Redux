import React, { useEffect } from 'react';
import PT from 'prop-types';

// import s from './style.module.sass';

import { UserTeamsEditForm } from './_components/UserTeamsEditForm';
import { UserTeamsLIstOfUsersView } from './_components/UserTeamsLIstOfUsers';
import { UserTeamsHeader } from './_components/UserTeamsHeader';
import { UserTeamsInviteForm } from './_components/UserTeamsInviteForm';

import { UserProfileTabsWrapperView } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserProfileTabsWrapper';


const UserTeamsView = ({
  currentTab,
  teams,
  currentTeamId,
  setTeam,
  isUserUpdating,
  updateSingleUserTeam,
  getListOfTeamUsers,
  teamsUsers,
  modalOpen,
  teamsDeleting,
  onClose,
}) => {
  const filteredTeam = teams.filter(item => item.teamId === currentTeamId);
  const initialValues = {};
  // eslint-disable-next-line array-callback-return
  filteredTeam.reduce(accumulator => {
    initialValues.name = accumulator.team.name || 'Username';
    initialValues.colorHex = accumulator.team.colorHex || '#82ABFB';
    initialValues.statusName = accumulator.statusName;
  }, filteredTeam[0]);

  useEffect(() => {
    getListOfTeamUsers(currentTeamId, 1, 9999);
  },[currentTeamId]);

  useEffect(() => {
    if (teamsDeleting) {
      const test = teams.filter(item => item.teamId !== currentTeamId);
      if (test.length > 0) {
        setTeam(test[0].teamId);
      }
    }
  },[teamsDeleting, teams]);

  // TODO change
  if (teams.length === 0) return <div>No teams</div>;

  return (
    <UserProfileTabsWrapperView tabPrefix={currentTab.prefix} currentTab={initialValues.name} onClose={onClose}>
      <UserTeamsHeader
        statusName={initialValues.statusName}
        modalOpen={modalOpen}
        currentTeamId={currentTeamId}
      />
      <UserTeamsEditForm
        teams={teams}
        currentTeamId={currentTeamId}
        isUserUpdating={isUserUpdating}
        updateSingleUserTeam={updateSingleUserTeam}
        initialValues={initialValues}
      />
      <UserTeamsInviteForm/>
      <UserTeamsLIstOfUsersView teamsUsers={teamsUsers}/>
    </UserProfileTabsWrapperView>
  )
};

UserTeamsView.propTypes = {
  currentTab: PT.object,
  teams: PT.arrayOf(PT.object),
  currentTeamId: PT.string,
  setTeam: PT.func,
  isUserUpdating: PT.bool,
  updateSingleUserTeam: PT.func,
  getListOfTeamUsers: PT.func,
  teamsUsers: PT.arrayOf(PT.object),
  modalOpen: PT.func,
  teamsDeleting: PT.bool,
  onClose: PT.func,
};

export default UserTeamsView;
