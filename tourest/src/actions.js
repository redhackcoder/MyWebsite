// src/actions.js
export const SET_TRIPS = 'SET_TRIPS';

export const setTrips = (trips) => ({
  type: SET_TRIPS,
  payload: trips,
});
