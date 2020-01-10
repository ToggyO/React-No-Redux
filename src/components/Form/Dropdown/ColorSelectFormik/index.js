import React from 'react';
import PT from 'prop-types';

import s from '../ColorSelect/style.module.sass';

import style from './style.module.sass';

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

export const ColorSelectFormik = ({ form, field, inlineStyle, customOnChange }) => {
  const getDropdownList = () =>
    array.map(item => (
      <div className={s.color_container}>
        <input
          type="radio"
          id={item}
          value={item}
          className={`${s.color}`}
          style={{ backgroundColor: item }}
          checked={item === field.value}
          onChange={e => {
            form.setFieldValue('colorHex', e.target.value, false);
            customOnChange(item);
          }}
        />
        {field.value === item && <img src={checkMark} alt="v" className={s.checkMark} />}
      </div>
    ));

  return (
    <Dropdown
      list={getDropdownList()}
      menuClassName={s.menu}
      outerListClassName={style.list}
      innerListClassName="flex flex-wrap-wrap"
      onVisibilityChanged
    >
      <button
        type="button"
        className={style.color}
        style={{ ...inlineStyle.button, backgroundColor: field.value }}
      >
        <p className={style.button_text} style={inlineStyle.buttonText}>
          Change color
        </p>
        <div className={style.arrow} style={inlineStyle.arrow} />
      </button>
    </Dropdown>
  );
};

ColorSelectFormik.propTypes = {
  form: PT.object,
  setFieldValue: PT.func,
  field: PT.object,
  value: PT.string,
  inlineStyle: PT.object,
  customOnChange: PT.func,
};
