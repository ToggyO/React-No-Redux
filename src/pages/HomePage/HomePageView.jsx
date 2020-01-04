import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { detect } from 'detect-browser';

import s from './style.module.sass';

import { ColorBlocks } from '@components/StyledComponents';
import { LogoutButton } from '@components/LogoutButton';
import superaxios from '@services/superaxios';


// eslint-disable-next-line react/prop-types
const HomePageView = ({ modalOpen }) => {
  const [userId, setUserId] = useState('');

  const browser = detect();
  console.log(browser.os);
  // if (browser && /android|iOS/i.test(browser.os)) return <div>HAHAHAHAH! LOL!</div>;

  return (
    <ColorBlocks.PrimaryColorBlock className={`${s.wrapper} flex align-items-center flex-column`} >
      <Helmet defaultTitle="Squad.io - Home">
        {browser && /android|iOS/i.test(browser.os)
          && <meta name="viewport" content="width=990px, user-scalable=yes"/>}
        <meta name="description" content="Home page" />
      </Helmet>
      <h1>Protected Home Page</h1>
      <form className="flex flex-column">
        <label htmlFor="delete_user_test" className="flex flex-column text-align-center">
          Delete User by ID
          <input
            type="text"
            id="delete_user_test"
            name="delete_user"
            value={userId}
            onChange={e => setUserId(e.currentTarget.value)}
          />
        </label>
        <button
          type="button"
          onClick={() =>
            superaxios.delete(`users/${userId}`)
              .then(res => console.log(res.code))
              .catch(e => console.log(e))
          }
        >
          Kill
        </button>
        <button type="button" onClick={() => modalOpen('Handler500')}>Handler500</button>
        <button type="button" onClick={() => modalOpen('DeprecatedLinkMessage')}>DeprecatedLinkMessage</button>
        <button
          type="button"
          onClick={() =>{
            modalOpen('Handler500');
            setTimeout(() => modalOpen('DeprecatedLinkMessage'), 1000);
          }}
        >
          AND TOGETHER!!!!
        </button>
      </form>
      <LogoutButton addButtonClass="btn" />
    </ColorBlocks.PrimaryColorBlock>
  )
};

export default HomePageView;
