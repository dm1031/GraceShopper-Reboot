import { GET_USER_CREDENTIALS } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_CREDENTIALS:
      return action.user
    default:
      return state
  }
}
