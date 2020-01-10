import React from 'react';
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
}) => (
  <div>
    <UserTeamsFormView
      teams={teams}
      currentTeamId={currentTeamId}
      isUserUpdating={isUserUpdating}
      updateSingleUserTeam={updateSingleUserTeam}
    />
    <UserTeamsControlButton/>
    <UserTeamsLIstOfUsersView/>
  </div>
);

UserTeamsView.propTypes = {
  teams: PT.arrayOf(PT.object),
  currentTeamId: PT.string,
  isUserUpdating: PT.bool,
  updateSingleUserTeam: PT.func,
};

export default UserTeamsView;
