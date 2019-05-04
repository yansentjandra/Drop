import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Toolbar from "./shared/ToolbarView";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Toolbar} />
          <Route exact path="/Logout" component={Login} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
