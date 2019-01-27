const actions = {
  SET_MESSAGE: 'SET_MESSAGE',
  CLEAR_ALL: 'CLEAR_ALL_MESSAGES',
  setMessage: (key, message) => ({
    type: actions.SET_MESSAGE,
    key,
    message,
  }),
  clearAll: () => ({
    type: actions.CLEAR_ALL,
  })
};

export default actions;
