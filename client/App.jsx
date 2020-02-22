/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

<<<<<<< HEAD
const App = (props) => {
  return (
    <div className='router'>
      <main>
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route exact path="/login" component={} /> */}
        </Switch>
      </main>
    </div>
  );
};
=======
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      endpoint: '',
    };

    this.updateId = this.updateId.bind(this);
  }

  updateId(artistId) {
    this.setState({ id: artistId });
  }

  render() {
    return (
      <div className="router">
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              exact
              path="/login"
              component={<Login updateState={this.updateId} />}
            />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </main>
      </div>
    );
  }
}
>>>>>>> b5d1f431c593afa8341cbc89f1dd0e8e14bd872e

export default App;
