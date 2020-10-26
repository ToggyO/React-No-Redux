/* eslint-disable import/no-unresolved */
import loadable from '@loadable/component';

import { ROUTES } from '@config';

import App from '../App';

export default [
  {
    component: App,
    routes: [
      {
        path: ROUTES.LOGIN,
        component: loadable(() =>
          import(/* webpackChunkName: 'loginLayout' */ '@components/Layouts/LoginLayout/LoginLayout')
        ),
        routes: [
          {
            path: ROUTES.LOGIN,
            component: loadable(() =>
              import(/* webpackChunkName: 'loginLayout' */ '@pages/Login/LoginPageContainer')
            ),
          },
        ],
      },
      {
        path: ROUTES.ROOT,
        component: loadable(() =>
          import(/* webpackChunkName: 'basicLayout' */ '@components/Layouts/BasicLayout/BasicLayout')
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
