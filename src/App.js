import React from 'react';
import { renderRoutes } from 'react-router-config';
import PT from 'prop-types';

import 'antd/dist/antd.css';

const App = ({ route }) => <>{renderRoutes(route.routes)}</>;

App.propTypes = {
  route: PT.object,
};

export default App;
