import React, { useContext } from 'react';

import { AppStoreContext } from '@ducks';
import { _globalActions, _globalSelectors } from '@ducks/store';

const SomePageView = () => {
  const { state, dispatch } = useContext(AppStoreContext);
  console.log(state.global);
  return (
    <div>
      <h1>Protected Some Page</h1>
      <button type="button" onClick={() => dispatch(_globalActions.setGlobalLoading(!state.global.loading))}>
        Toggle loader
      </button>
      {_globalSelectors.globalLoaderSelector(state) ? <div>loading</div> : null}
    </div>
  );
}
export default SomePageView;
