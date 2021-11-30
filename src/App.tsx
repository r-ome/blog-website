import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components';
import routes from './routes/routes';

interface Route {
  path: string,
  component: React.ElementType
}

const App = () => (
  <Router>
    <div>
      <Header routes={routes} />

      <Switch>
        {routes.map(({ path, component: Component}: Route, i: number) => (
          <Route
            path={path}
            exact={true}
            key={i}
            render={props => 
              Component ? <Component {...props} /> : null
            }
          >
          </Route>
        ))}
      </Switch>
    </div>
  </Router>
);

export default App;
