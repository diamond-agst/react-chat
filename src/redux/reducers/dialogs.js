const initualState = {
  items: [],
  currentDialog: null,
};

export default (state = initualState, { type, payload }) => {
  switch (type) {
    case 'DIALOGS:SET_ITEMS':
      return {
        ...state,
        items: payload,
      };
    case 'DIALOGS:SET_CURRENT_DIALOG':
      return {
        ...state,
        currentDialog: payload,
      };

    default:
      return state;
  }
};
