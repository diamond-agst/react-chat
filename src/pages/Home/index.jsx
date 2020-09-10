import React from 'react';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import { ChatInput } from '../../componets';
import { Messages, Dialogs } from '../../containers';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <FormOutlined />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs userId={2} items={[]} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Федор Доскоевский</b>
              <div className="chat__dialog-header-status">
                <span className="status status-online">онлайн</span>
              </div>
            </div>
            <EllipsisOutlined style={{ fontSize: '25px' }} />
          </div>
          <div className="chat__dialog-messages">
            <Messages items={[]} />
          </div>
          <ChatInput />
        </div>
      </div>
      {/* <Dialogs
        userId={2}
        items={[
          {
            _id: 'c2cb085c24f850986e55f1c44abe6876',
            text: 'Не способны распознавать или идентифицировать чувства чужих людей.',
            isReaded: true,
            created_at: new Date('Thu Aug 09 2020 00:48:50 GMT+0300 '),
            user: {
              id: 1,
              fullname: 'Федор Достоевский',
              avatar:
                'https://sun6-16.userapi.com/impg/ilWebPWObfljsLGIHm0cXvYr9gfsuTXoY_bOEA/7QnWAR5glMQ.jpg?size=50x0&quality=90&crop=0,0,644,644&sign=d46af18deb94d1305c3be8bbf92554e1&ava=1',
            },
          },
          {
            _id: 'grgregedvrfgver',
            text: 'Не способны распознавать или идентифицировать чувства чужих людей.',
            isReaded: true,
            created_at: new Date('Thu Aug 08 2020 17:00:50 GMT+0300 '),
            user: {
              _id: 1,
              fullname: 'Он',
              avatar:
                'https://sun6-16.userapi.com/impg/ilWebPWObfljsLGIHm0cXvYr9gfsuTXoY_bOEA/7QnWAR5glMQ.jpg?size=50x0&quality=90&crop=0,0,644,644&sign=d46af18deb94d1305c3be8bbf92554e1&ava=1',
            },
          },
          {
            _id: 'fedfewfw',
            text: 'Не способны распознавать й.',
            isReaded: true,
            created_at: new Date('Thu Aug 09 2020 17:05:50 GMT+0300 '),
            user: {
              _id: 'a125f7660b840a7a1f4db33e9fa03b14',
              fullname: 'Она лучше',
              avatar: null,
            },
          },
          {
            _id: 'fedfewfw',
            text: 'Не способны распознавать й.',
            isReaded: true,
            created_at: new Date('Thu Aug 09 2020 17:08:50 GMT+0300 '),
            user: {
              _id: '941d51376edc9101c234e4ca65769950',
              fullname: 'Она лучше',
              avatar: null,
            },
          },
        ]}
      /> */}
      {/* <Message
        avatar={null}
        text="Добрый день , пытаюсь подключить библиотеку js date-fns. Делаю все по официальным документам , но выводит ошибку - RangeError: Invalid time value. Подскажите пожалуйста как исправить."
        date={new Date('Wed Jul 29 2020 12:31:34 GMT+0300')}
        attachments={[
          {
            filename: 'image',
            url: 'https://source.unsplash.com/100x100/?random=1&experimental',
          },
          {
            filename: 'image',
            url: 'https://source.unsplash.com/100x100/?random=2&experimental',
          },
          {
            filename: 'image',
            url: 'https://source.unsplash.com/100x100/?random=3&experimental',
          },
        ]}
      />
      <Message
        avatar="https://sun6-16.userapi.com/impg/ilWebPWObfljsLGIHm0cXvYr9gfsuTXoY_bOEA/7QnWAR5glMQ.jpg?size=50x0&quality=90&crop=0,0,644,644&sign=d46af18deb94d1305c3be8bbf92554e1&ava=1"
        text="Добрый день "
        date={new Date('Wed Jul 29 2020 12:31:34 GMT+0300')}
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar="https://sun6-16.userapi.com/impg/ilWebPWObfljsLGIHm0cXvYr9gfsuTXoY_bOEA/7QnWAR5glMQ.jpg?size=50x0&quality=90&crop=0,0,644,644&sign=d46af18deb94d1305c3be8bbf92554e1&ava=1"
        attachments={[
          {
            filename: 'image',
            url: 'https://source.unsplash.com/100x100/?random=1&experimental',
          },
        ]}
        date={new Date('Wed Jul 29 2020 12:31:34 GMT+0300')}
      />
      <Message
        avatar="https://sun6-16.userapi.com/impg/ilWebPWObfljsLGIHm0cXvYr9gfsuTXoY_bOEA/7QnWAR5glMQ.jpg?size=50x0&quality=90&crop=0,0,644,644&sign=d46af18deb94d1305c3be8bbf92554e1&ava=1"
        isTyping={true}
      />
      <Message
        avatar="https://sun6-16.userapi.com/impg/ilWebPWObfljsLGIHm0cXvYr9gfsuTXoY_bOEA/7QnWAR5glMQ.jpg?size=50x0&quality=90&crop=0,0,644,644&sign=d46af18deb94d1305c3be8bbf92554e1&ava=1"
        date={new Date('Wed Jul 29 2020 12:31:34 GMT+0300')}
        audio="https://notificationsounds.com/soundfiles/7750ca3559e5b8e1f44210283368fc16/file-sounds-1159-promise.mp3"
      /> */}
    </section>
  );
};

export default Home;
