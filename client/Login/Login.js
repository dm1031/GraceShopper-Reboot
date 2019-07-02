import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { LoginThunk } from '../store/auth/actions'

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => dispatch(LoginThunk(credentials))
  }
}

const Login = ({ login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const handleSubmit = () => {
    const credentials = { email, password }
    login(credentials)
      .then(() => console.log('logged in!'))
      .catch(err => setErrors(err.response.data))
  }

  return (
    <div>
      {errors ? <div>{errors}</div> : ''}
      <form>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
        </label>
        <button type="button" onClick={() => handleSubmit()}>
          Login
        </button>
      </form>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
