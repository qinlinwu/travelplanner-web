import React, { Component } from 'react'
import { Route, Switch} from "react-router";
import Login from './Login';
import Register from './Register';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    )
  }
}
export default Main