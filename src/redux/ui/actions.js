const actions = {
  TOGGLE_DATE_DRAWER: 'TOGGLE_DATE_DRAWER',
  SET_CALENDAR_FILTERS: 'SET_CALENDAR_FILTERS',
  
  setDateDrawer: (isOpen) => ({
    type: actions.TOGGLE_DATE_DRAWER,
    isOpen
  }),

  setCalendarFilters: (filters) => ({
    type: actions.SET_CALENDAR_FILTERS,
    filters
  })
};
export default actions;
