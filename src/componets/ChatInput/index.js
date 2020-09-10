import React, { useState } from 'react';
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  RightCircleTwoTone,
} from '@ant-design/icons';
import { Input } from 'antd';
import { UploadField } from '@navjobs/upload';

import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = () => {
  const [value, setValue] = useState('');
  const [emojiPicker, setEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPicker(!emojiPicker);
  };
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPicker && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}
        <SmileOutlined onClick={toggleEmojiPicker} />
      </div>
      <Input onChange={(e) => setValue(e.target.value)} placeholder="Введите текст сообщения" />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: 'chat-input__actions-upload-btn',
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.gif,.bmp',
            multiple: 'multiple',
          }}>
          <CameraOutlined />
        </UploadField>
        {value ? <RightCircleTwoTone /> : <AudioOutlined />}
      </div>
    </div>
  );
};

export default ChatInput;
