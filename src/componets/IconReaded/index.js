import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { CheckCircleOutlined } from '@ant-design/icons';

const IconReaded = ({ isMe, isReaded }) =>
  (isMe && (isReaded ? <CheckCircleOutlined /> : <CheckOutlined />)) || null;

export default IconReaded;
