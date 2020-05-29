import React from 'react';
import { Link } from 'react-router-dom';

export const BreadcrumbItem = (
  route,
  params,
  routes,
  // eslint-disable-next-line no-unused-vars
  paths,
) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    // <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    <Link to={route.path}>{route.breadcrumbName}</Link>
  );
};

