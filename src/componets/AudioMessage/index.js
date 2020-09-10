import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

import './AudioMessage.scss';

const AudioMessage = (props) => {
  return (
    <div>
      <BaseButton
        className={classNames('button', props.className, { button__large: props.size === 'large' })}
        {...props}
      />
    </div>
  );
};

export default AudioMessage;
