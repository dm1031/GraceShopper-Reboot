import axios from 'axios'

// ------- action
export const GET_USER_CREDENTIALS = 'GET_USER_CREDENTIALS'

// ------- action creator
export const Login = user => {
  return {
    type: GET_USER_CREDENTIALS,
    user
  }
}

// ------- thunk
export const LoginThunk = credentials => {
  console.log('credentials', credentials)
  return dispatch => {
    return axios
      .post('/auth', credentials)
      .then(res => res.data)
      .then(user => dispatch(Login(user)))
  }
}
