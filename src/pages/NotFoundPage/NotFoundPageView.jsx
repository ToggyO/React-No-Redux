import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './notfound.module.scss';

const NotFoundPageView = () => (
  <div>
    <Helmet defaultTitle="Squad.io - 404">
      <meta name="description" content="404" />
    </Helmet>
    <h1 className={styles.notfound}>Not found page</h1>
  </div>
);

export default NotFoundPageView;
