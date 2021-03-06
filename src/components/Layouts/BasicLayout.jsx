import React from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import { Breadcrumb, Layout, Menu } from 'antd';
import PropTypes from 'prop-types';

import s from './style.module.sass';

import { name } from '@assets/manifest.json';
import { getPageTitle, getMenuHeadlines } from '@utils';
import { BreadcrumbItem } from '@components';

const { Header, Content, Footer } = Layout;

const BasicLayout = ({ history, location, route }) => {
  const { routes } = route;
  const { pathname } = location;

  const title = getPageTitle({
    pathname,
  });

  const splittedPathname = pathname.split('/');
  const defaultActiveKey = `/${splittedPathname[splittedPathname.length - 1]}`;

  const renderMenu = (links = []) => (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultActiveKey]}>
      {links.map(link => (
        <Menu.Item
          key={link.path}
          onClick={() => history.push(link.path)}
        >
          {getMenuHeadlines(link.path)}
        </Menu.Item>
      ))}
    </Menu>
  );

  const createBreadcrumb = pathName => {
    const breadcrumbs = [
      {
        path: '/',
        breadcrumbName: 'Home',
      },
    ];
    const pathnameArray = pathName.split('/');
    // eslint-disable-next-line array-callback-return
    pathnameArray.map(path => {
      if (path.length) {
        breadcrumbs.push({
          path: `/${path}`,
          breadcrumbName: getMenuHeadlines(`/${path}`),
        });
      }
    });
    return breadcrumbs;
  };

  // eslint-disable-next-line no-shadow,react/prop-types
  const renderFooter = ({ title, href }) => (
    <div className={s.basic_layout__footer}>
      <a href={href}>
        <p className={s.basic_layout__footer_text}>{title}</p>
      </a>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{`${name}${title}`}</title>
        <meta name="description" content={title} />
      </Helmet>

      <Layout>
        <Header>
          {renderMenu(routes)}
        </Header>
        <Content className={s.basic_layout__content}>
          <Breadcrumb
            routes={createBreadcrumb(pathname)}
            itemRender={BreadcrumbItem}
          />
          <div className={s.basic_layout__children}>
            {renderRoutes(routes)}
          </div>
        </Content>
        <Footer>
          {renderFooter({
            title: 'Developed by Toggy-O',
            href: '/',
          })}
        </Footer>
      </Layout>
    </>
  );
};

BasicLayout.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  route: PropTypes.object,
};

export default BasicLayout;
