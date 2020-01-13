import React, { useEffect } from 'react';
import PT from 'prop-types';

// import s from './style.module.sass';

import { UserTeamsFormView } from './_components/UserTeamsForm';
import { UserTeamsLIstOfUsersView } from './_components/UserTeamsLIstOfUsers';

import { UserTeamsControlButton } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserTeams/_components/UserTeamsControlButtons';

const UserTeamsView = ({
  teams,
  currentTeamId,
  isUserUpdating,
  updateSingleUserTeam,
  getListOfTeamUsers,
  teamsUsers,
  modalOpen,
}) => {
  const filteredTeam = teams.filter(item => item.teamId === currentTeamId);
  const initialValues = {};
  filteredTeam.forEach(item => {
    initialValues.name = item.team.name;
    initialValues.colorHex = item.team.colorHex;
    initialValues.statusName = item.statusName;
  });

  useEffect(() => {
    getListOfTeamUsers(currentTeamId, 1, 9999);
  },[currentTeamId]);

  return (
    <div>
      <UserTeamsFormView
        teams={teams}
        currentTeamId={currentTeamId}
        isUserUpdating={isUserUpdating}
        updateSingleUserTeam={updateSingleUserTeam}
        initialValues={initialValues}
      />
      <UserTeamsControlButton statusName={initialValues.statusName} modalOpen={modalOpen}/>
      <UserTeamsLIstOfUsersView teamsUsers={teamsUsers}/>
    </div>
  )
};

UserTeamsView.propTypes = {
  teams: PT.arrayOf(PT.object),
  currentTeamId: PT.string,
  isUserUpdating: PT.bool,
  updateSingleUserTeam: PT.func,
  getListOfTeamUsers: PT.func,
  teamsUsers: PT.arrayOf(PT.object),
  modalOpen: PT.func,
};

export default UserTeamsView;
