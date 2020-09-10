const initualState = {
  items: [],
  isLoading: false,
};

export default (state = initualState, { type, payload }) => {
  switch (type) {
    case 'MESSAGES:SET_ITEMS':
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case 'MESSAGES:SET_ISLOADING': {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default:
      return state;
  }
};
