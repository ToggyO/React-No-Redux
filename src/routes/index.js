/* eslint-disable import/no-unresolved */
import loadable from '@loadable/component';

import App from '../App';

import { ROUTES } from '@config';

export default [
  {
    component: App,
    routes: [
      {
        path: ROUTES.HOME_PAGE,
        component: loadable(() =>
          import(/* webpackChunkName: 'basicLayout' */ '@components/Layouts/BasicLayout')
        ),
        routes: [
          {
            path: ROUTES.HOME_PAGE,
            component: loadable(() => import(/* webpackChunkName: 'home' */ '@pages/HomePage/HomePageView')),
            exact: true,
          },
          {
            path: ROUTES.SOME_PAGE,
            component: loadable(() => import(/* webpackChunkName: 'some' */ '@pages/HomePage/SomePageView')),
            exact: true,
          },
          {
            path: ROUTES.ANOTHER_PAGE,
            component: loadable(() =>
              import(/* webpackChunkName: 'another' */ '@pages/HomePage/AnotherPageView')
            ),
            exact: true,
          },
        ],
      },
    ],
  },
];
