import React from "react";
import Login from "../pages/LoginPage";

class LoginComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(username, password) {
    this.postData(this.getContextPath() + `/app/Users/login`, {
      username: username,
      password: password
    }).then(response => {
      if (response.ok) {
        response.text().then(data => {
          if (data == "Professor" || data == "Student") {
            this.props.history.push("/Home");
          }
        });
      }
    });
  }

  postData(url = ``, data = {}) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  }

  getContextPath() {
    return window.location.pathname.substring(
      0,
      window.location.pathname.indexOf("/", 2)
    );
  }

  render() {
    return (
      <div>
        <Login onSubmit={this.handleClick} />
      </div>
    );
  }
}
export default LoginComp;
