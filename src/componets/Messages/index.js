import React from 'react';
import { Message } from '../';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { Empty } from 'antd';

import './Messages.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Messages = ({ items, isLoading, blockRef }) => {
  return (
    <div ref={blockRef} className={classNames('messages', { 'messages--loading': isLoading })}>
      {isLoading ? (
        <Spin indicator={antIcon} />
      ) : items.length ? (
        items.map((item) => <Message {...item} key={item._id} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Messages;
