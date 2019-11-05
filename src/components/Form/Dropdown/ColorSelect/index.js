import React, { useState } from 'react';
import PT from 'prop-types';

import s from './style.module.sass';

import Dropdown from '@components/Form/Dropdown/Dropdown';
import checkMark from '@assets/login_page/done_mini.png';

const array = [
  '#82ABFB',
  '#9B82FB',
  '#DA82FB',
  '#FB82A4',
  '#FB9B82',
  '#FBC882',
  '#ADE774',
  '#73DEE3',
  '#587E8D',
  '#00A99A',
  '#5969C6',
  '#4B1EA6',
];

export const ColorSelect = ({ setFieldValue }) => {
  const [color, setColor] = useState('#82ABFB');

  const getDropdownList = () =>
    array.map(item => (
      <div className={s.color_container}>
        <button
          type="button"
          className={s.color}
          style={{ backgroundColor: item }}
          onClick={() => {
            setColor(item);
            setFieldValue('colorHex', item, false);
          }}
        >
          {color === item && <img src={checkMark} alt="v" className={s.checkMark} />}
        </button>
      </div>
    ));

  return (
    <Dropdown
      list={getDropdownList()}
      menuClassName={s.menu}
      outerListClassName={s.list}
      innerListClassName="flex flex-wrap-wrap"
    >
      <button type="button" className={s.color} style={{ backgroundColor: color }}>
        <div className={s.arrow} />
      </button>
    </Dropdown>
  );
};

ColorSelect.propTypes = {
  setFieldValue: PT.func,
};
