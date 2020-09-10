import { messagesApi } from '../../utils/api';

const actions = {
  setMessages: (items) => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: items,
  }),
  setIsLoading: (bool) => ({
    type: 'MESSAGES:SET_ISLOADING',
    payload: bool,
  }),
  fetchMessages: (dialogId) => (dispatch) => {
    dispatch(actions.setIsLoading(true));
    messagesApi.getAllByDialogId(dialogId).then(({ data }) => {
      dispatch(actions.setMessages(data));
      dispatch(actions.setIsLoading(false));
    });
  },
};

export default actions;
