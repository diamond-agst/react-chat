import React, { useEffect, useRef } from 'react';
import { Messages as BaseMessages } from '../componets';
import { connect } from 'react-redux';

import { messagesActions } from '../redux/actions';

const Messages = ({ fetchMessages, items, userId, setCurrentDialog, currentDialog, isLoading }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialog) {
      fetchMessages(currentDialog);
    }
  }, [currentDialog, fetchMessages]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [items]);

  return (
    <BaseMessages
      userId={userId}
      items={items}
      onSelectDialog={setCurrentDialog}
      isLoading={isLoading}
      blockRef={messagesRef}
    />
  );
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialog: dialogs.currentDialog,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesActions,
)(Messages);
