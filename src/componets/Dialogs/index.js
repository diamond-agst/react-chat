import React from 'react';
import { DialogItem } from '../';
import { Input } from 'antd';
import orderBy from 'lodash/orderBy';
import { Empty } from 'antd';

import './Dialogs.scss';

const Dialogs = ({ items, userId, onSearch, onSelectDialog, currentDialog }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          key={item._id}
          user={item.user}
          message={item}
          isMe={item.user._id === userId}
          unreaded="0"
          onSelect={onSelectDialog}
          currentDialog={currentDialog}
          {...item}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    )}
  </div>
);

export default Dialogs;
