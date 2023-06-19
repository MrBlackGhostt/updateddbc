import {
  CONTACT_US,
  TOGGLE_FETCH,
  TOGGLE_NOTIFICATION,
  TOUR_CATEGORY_PAGE,
  COUNT_INCREASE,
} from "../actions/types";

const INITIAL_STATE = {
  displayNotification: false,
  notification: "",
  fetch: false,
  count: 0,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case TOGGLE_NOTIFICATION:
      return {
        ...state,
        displayNotification: !state.displayNotification,
        notification: actions.payload,
      };
    case TOGGLE_FETCH:
      return {
        ...state,
        fetch: !state.fetch,
      };

    case COUNT_INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case TOUR_CATEGORY_PAGE:
      return {
        ...state,
        fetch: !state.fetch,
      };

    case CONTACT_US:
      return {
        ...state,
        displayNotification: !state.displayNotification,
        notification: actions.payload,
      };

    default:
      return state;
  }
};
