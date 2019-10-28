//import request from "superagent";
//const baseUrl = "http://localhost:5000";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// export const login = (email, password) => (dispatch, getState) => {
//   console.log(email, password);
//   request
//     .post(`${baseUrl}/login`)
//     .send({ email, password })
//     .then(response => {
//       console.log("What do we get?", response);
//       dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
//     })
//     .catch(console.error);
// };

export const login = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
})



// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

// export const signup = (email, password) => (dispatch, getState) => {
//   console.log(email, password);
//   request
//     .post(`${baseUrl}/users`)
//     .send({ email, password })
//     .then(response => {
//       console.log("What do we get?", response);
//       dispatch({ type: SIGNUP_SUCCESS, payload: response.body.jwt });
//     })
//     .catch(console.error);
// };