import React, { useState, useEffect } from 'react';
import { Dialogs as BaseDialogs } from '../componets';
import { connect } from 'react-redux';

import { dialogsActions } from '../redux/actions';

const Dialogs = ({ fetchDialogs, items, userId, setCurrentDialog, currentDialog }) => {
  const [inputValue, setValue] = useState('');
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = (value = '') => {
    setFiltredItems(
      items.filter(
        (dialog) => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
    setValue(value);
  };

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltredItems(items);
    }
  }, [items, fetchDialogs]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialog}
      currentDialog={currentDialog}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
