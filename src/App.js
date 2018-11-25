import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.scss';
import EmailPage from './components/EmailPage';
import SubscriptionsPage from './components/SubscriptionsPage';
import Logo from './logo4.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app container">
          <img className="logo-main" src={Logo} />
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={EmailPage} />
            <Route path='/subscriptions' component={SubscriptionsPage} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
