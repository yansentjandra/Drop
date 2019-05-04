import React from "react";
import SignUp from "../pages/SignUp";

class SignUpComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(username, password, type) {
    console.log(type);
    this.postData(this.getContextPath() + `/app/Users/Signup`, {
      username: username,
      password: password
    }).then(response => {
      if (response.ok) {
        response.text().then(data => {
          if (data == "Success") {
            this.props.history.push("/");
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
        <SignUp onSubmit={this.handleClick} />
      </div>
    );
  }
}
export default SignUpComp;
