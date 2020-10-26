import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

import s from './style.module.sass';

const LoginLayout = ({ route }) => (
  <div className={s.container}>
    <div className={s.form_container}>
      <Typography.Title
        type="secondary"
        className={s.title}
      >
          Welcome
      </Typography.Title>
      <div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  </div>
);

export default LoginLayout;

LoginLayout.propTypes = {
  route: PropTypes.object.isRequired,
};
