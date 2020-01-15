import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './app.scss';
import store from './redux';
import Menu from './components/Menu';
import List from './pages/List';
import Show from './pages/Show';

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="wrapper" className="h-full">
          <div id="left" className="h-full bg-white shadow-md shadown-blue rtl">
            <Menu />
          </div>
          <div id="right" className="h-full bg-blue-100 p-3">
            <Switch>
              <Route exact path="/list/:section">
                <List />
              </Route>
              <Route exact path="/show/:name">
                <Show />
              </Route>
              <Redirect exact from="/" to="/list/featured" />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
