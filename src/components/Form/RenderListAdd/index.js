import React, { useState, useEffect } from 'react';
import PT from 'prop-types';

import s from '../RenderListDelete/style.module.sass';

import { Icon } from '@components/Icon';

export const RenderListAdd = ({
  email,
  state,
  addContainerClass = '',
  addTextClass = '',
  addDeleteButtonClass = '',
  addIconClass = '',
  onClick,
  style = {},
  icon,
  addIconFillClass,
}) => {
  const [innerState, setInnerState] = useState(false);

  useEffect(() => setInnerState(state), [state]);

  const handleSubmit = () => onClick();

  return (
    <div className={`${s.container} ${addContainerClass}`} style={style.container} onClick={handleSubmit}>
      <div className={`${s.deleteButton} ${addDeleteButtonClass}`} style={style.deleteButton}>
        <Icon iconName={icon} className={`${!innerState ? addIconFillClass : ''} ${addIconClass}`} />
      </div>
      <div className={`${s.email} ${addTextClass}`} style={style.email}>
        {email}
      </div>
    </div>
  );
};

RenderListAdd.propTypes = {
  email: PT.string,
  state: PT.bool,
  addContainerClass: PT.string,
  addTextClass: PT.string,
  addDeleteButtonClass: PT.string,
  addIconClass: PT.string,
  addIconFillClass: PT.string,
  onClick: PT.func,
  style: PT.object,
  icon: PT.string,
};
