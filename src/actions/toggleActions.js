import { TOGGLE_NOTIFICATION, TOGGLE_FETCH, COUNT_INCREASE } from "./types";

export const toggleNotification = (data) => {
  return {
    type: TOGGLE_NOTIFICATION,
    payload: data,
  };
};

export const toggleFetch = (data) => {
  return {
    type: TOGGLE_FETCH,
    payload: data,
  };
};

export const countIncrease = () => {
  return {
    type: COUNT_INCREASE,
  };
};
