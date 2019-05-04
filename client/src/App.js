import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Toolbar from "./shared/ToolbarView";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Logout" component={Login} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
