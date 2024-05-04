import React, { Component } from 'react'



export default class Login extends Component {
  render() {
    return (
      <div className="card mx-auto" styles="max-width: 100px;">
      <div className="card-body d-flex flex-column align-items-center"styles="max-width: 100px;">
      <form>
        <h4 className="text-center">Sign In</h4>
        <div className="mb-3 text-center ">
          <label styles="font-size: 5px;">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div >
        <div className="mb-3 text-center  ">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3 text-center">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-center">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}