export function getView(width) {
  let newView = 'MobileView';
  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }
  return newView;
}
const actions = {
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  START_ASYNC: 'START_ASYNC',
  END_ASYNC: 'END_ASYNC',
  SET_LAST_API_CALL: 'SET_LAST_API_CALL',
  REPEAT_WITH_OTP: 'REPEAT_WITH_OTP',
  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height
    };
  },
  toggleOpenDrawer: () => ({
    type: actions.COLLPSE_OPEN_DRAWER
  }),
  changeOpenKeys: openKeys => ({
    type: actions.CHANGE_OPEN_KEYS,
    openKeys
  }),
  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current
  }),
  startAsync: () => ({
    type: actions.START_ASYNC,
  }),
  endAsync: () => ({
    type: actions.END_ASYNC,
  }),
  setLastAPIAction: (action) => ({
    type: actions.SET_LAST_API_CALL,
    action,
  }),
  repeatWithOTP: (otp) => ({
    type: actions.REPEAT_WITH_OTP,
    code: otp,
  })
};
export default actions;
