import React from 'react';
import classNames from 'classnames';
import Avatar from '../Avatar';

import './DialogItem.scss';
import IconReaded from '../IconReaded';

// const getMessageTime = (created_at) => {
//   if (isToday(created_at)) {
//     return format(created_at, 'HH:mm');
//   } else {
//     return format(created_at, 'dd.MM.yyyy');
//   }
// };

const DialogItem = ({ _id, user, message, unreaded, isMe, isOnline, onSelect, currentDialog }) => {
  return (
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': isOnline,
        'dialogs__item--selected': currentDialog === _id,
      })}
      onClick={onSelect.bind(this, _id)}>
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span></span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message.text}</p>
          <span className="dialogs__item-info-bottom-readed">
            {<IconReaded isMe={true} isReaded={false} />}
          </span>
          {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded}</div>}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
