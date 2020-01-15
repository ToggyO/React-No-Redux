import { connect } from 'react-redux';

import ModalDeleteTeamWarningView from './ModalDeleteTeamWarningView';

import * as userActions from '@ducks/user/actions';

const mapDispatchToProps = dispatch => ({
  deleteTeam(...args) {
    dispatch(userActions.deleteTeam(...args));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(ModalDeleteTeamWarningView);
