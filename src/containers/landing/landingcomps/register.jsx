import React from "react";
import loginImg from "./food.jpg";
import { Link } from "react-router-dom";

export class Register extends React.Component {
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {/* This is a container refference for checking if isLogginActive == refference  */}
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/Layout">
            <button type="button" className="btn">
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
