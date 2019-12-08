import React, { Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'


import './AdminSignin.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showError: false
    }
  }

  // loginUser = async data => {
  //   try {
  //     const response = await apiCall.post('/auth/login', data)
  //     const {
  //       data: { token }
  //     } = response
  //     await localStorage.setItem('token', token)
  //     this.props.history.push('/')
  //   } catch (error) {
  //     throw error
  //   }
  // }

  handleSubmitForm = async evt => {
    evt.preventDefault()
    const { username, password } = this.state
    const { handleLogin } = this.props
    try {
      await handleLogin({ username, password })
      await this.props.history.push(`/`)
    } catch (error) {
      this.setState(() => {
        return { showError: true }
      })
      throw error
    }
  }

  handleTextInput = async evt => {
    const { name, value } = evt.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { showError } = this.state

    let errMessage

    if (showError) {
      errMessage = (
        <div>
          <span>Incorrect Username or Password</span>
        </div>
      )
    }
    if (this.props.isSignedIn) {return <Redirect to={`/dashboard/${localStorage.getItem('userId')}`} />}


    return (
      <Fragment>
        <div className='login-container'>
          <h2>Admin Login</h2>
          {errMessage}
          <form className="form" onSubmit={this.handleSubmitForm}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleTextInput}
                defaultValue={this.state.username}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleTextInput}
                defaultValue={this.state.password}
              />
            </div>
            <button className="login-button">Login</button>
          </form>
       
          
        </div>
      </Fragment>
    )
  }
}

export default LoginForm
