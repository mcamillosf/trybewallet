import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Wallet } from './pages';

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </Router>
  );
}

export default App;
