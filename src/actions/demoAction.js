// import {
//     ACTION_SOMETHING,
//   } from "./types";

export const friendConnected = (userName) => (dispatch) => {
  dispatch({
    type: FIREND_CONNECTED,
    payload: userName,
  });
};

export const friendDisconnected = (userName) => (dispatch) => {
  dispatch({
    type: FIREND_DISCONNECTED,
    payload: userName,
  });
};
