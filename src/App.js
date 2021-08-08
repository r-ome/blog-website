import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login, Header } from './components';
import './styles.css';
import routes from './routes';

const App = () => {
  return (
    <Router>
      <div>
        <Header routes={routes} />

        <Switch>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
