import React, { useEffect } from 'react';
import PT from 'prop-types';

// import s from './style.module.sass';

import { UserTeamsFormView } from './_components/UserTeamsForm';
import { UserTeamsLIstOfUsersView } from './_components/UserTeamsLIstOfUsers';

import { UserTeamsControlButton } from '@components/Modal/_components/UserSettings/_components/UserTabs/UserTeams/_components/UserTeamsControlButtons';

const UserTeamsView = ({
  teams,
  currentTeamId,
  setTeam,
  isUserUpdating,
  updateSingleUserTeam,
  getListOfTeamUsers,
  teamsUsers,
  modalOpen,
  teamsDeleting,
}) => {
  const filteredTeam = teams.filter(item => item.teamId === currentTeamId);
  const initialValues = {};
  // eslint-disable-next-line array-callback-return
  filteredTeam.reduce(accumulator => {
    initialValues.name = accumulator.team.name;
    initialValues.colorHex = accumulator.team.colorHex;
    initialValues.statusName = accumulator.statusName;
  }, filteredTeam[0]);

  useEffect(() => {
    getListOfTeamUsers(currentTeamId, 1, 9999);
  },[currentTeamId]);

  useEffect(() => {
    if (teamsDeleting) {
      setTeam(teams[0].teamId)
    }
  },[teamsDeleting]);

  if (teams.length === 0) return <div>No teams</div>;

  return (
    <div>
      <UserTeamsFormView
        teams={teams}
        currentTeamId={currentTeamId}
        isUserUpdating={isUserUpdating}
        updateSingleUserTeam={updateSingleUserTeam}
        initialValues={initialValues}
      />
      <UserTeamsControlButton
        statusName={initialValues.statusName}
        modalOpen={modalOpen}
        currentTeamId={currentTeamId}
      />
      <UserTeamsLIstOfUsersView teamsUsers={teamsUsers}/>
    </div>
  )
};

UserTeamsView.propTypes = {
  teams: PT.arrayOf(PT.object),
  currentTeamId: PT.string,
  setTeam: PT.func,
  isUserUpdating: PT.bool,
  updateSingleUserTeam: PT.func,
  getListOfTeamUsers: PT.func,
  teamsUsers: PT.arrayOf(PT.object),
  modalOpen: PT.func,
  teamsDeleting: PT.bool,
};

export default UserTeamsView;
