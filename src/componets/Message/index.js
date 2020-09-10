import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import { CheckOutlined } from '@ant-design/icons';
import Avatar from '../Avatar';

import waveSvg from '../../assets/img/wave.svg';
import pauseImg from '../../assets/img/pause.png';

import './Message.scss';

const MessageAudio = (audio) => {
  return (
    <div className="message__audio">
      <audio src={audio} preload="auto" />
      <div className="message__audio-progress" style={{ width: '40%', height: '100%' }} />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button>
            <img src={pauseImg} alt="Pause" />
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave" />
        </div>
        <span className="message__audio-duration">00:11</span>
      </div>
    </div>
  );
};

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping, audio }) => {
  return (
    <div
      className={classNames('message', {
        message__isme: isMe,
        'message__is-typing': isTyping,
        'message__is-audio': audio,
        ' message__image': attachments && attachments.length === 1,
      })}>
      <div className="message__content">
        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div className="message__info">
          <div>
            <div>
              {(audio || text || isTyping) && (
                <div className="message__bubble">
                  {text && <p className="message__text">{text}</p>}
                  {isTyping && (
                    <div className="message__typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                  {audio && <MessageAudio audio={null} />}
                </div>
              )}
            </div>
            <div>
              {attachments && (
                <div className="message__attachments">
                  {attachments.map((item) => (
                    <div className="message__attachments__item">
                      <img src={item.url} alt={item.filename} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {isMe && isReaded && <CheckOutlined className="message__icon-readed" />}
          {date && (
            <span className="message__date">
              {formatDistanceToNow(date, {
                addSuffix: true,
                locale: ruLocale,
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;
