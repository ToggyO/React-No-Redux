import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import s from '../RenderListDelete/style.module.sass';

import { Icon } from '@components/Icon';

const RenderListDelete = ({
  arrayIndex,
  email,
  state,
  addContainerClass = '',
  addTextClass = '',
  addDeleteButtonClass = '',
  addIconClass = '',
  onClick,
  style = {},
  iconSelected,
  iconNoSelected,
}) => {
  const [innerState, setInnerState] = useState(false);

  useEffect(() => console.log(innerState),[innerState]);
  useEffect(() => setInnerState(state),[state]);

  const handleSubmit = () => {
    setInnerState(!state);
    return onClick();
  };

  return (
    <div
      className={`${s.container} ${addContainerClass}`} style={style.container}
      onClick={handleSubmit}
    >
      <div
        className={`${s.deleteButton} ${addDeleteButtonClass}`}
        style={style.deleteButton}
      >
        <Icon iconName={iconSelected} className={`${!innerState ? 'fill-light-gray' : ''} ${addIconClass}`}/>

        {/*{innerState*/}
        {/*  ? <Icon iconName={iconSelected} className={addIconClass}/>*/}
        {/*  : <Icon iconName={iconNoSelected} className={addIconClass}/>*/}
        {/*}*/}
      </div>
      <div className={`${s.email} ${addTextClass}`} style={style.email}>
        {email}
      </div>
    </div>
  );
};

RenderListDelete.propTypes = {
  arrayIndex: PT.any,
  email: PT.string,
  addContainerClass: PT.string,
  addTextClass: PT.string,
  addDeleteButtonClass: PT.string,
  addIconClass: PT.string,
  onClick: PT.func,
  style: PT.object,
  iconSelected: PT.string,
  iconNoSelected: PT.string,
};

export default RenderListDelete;
