import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './app.scss';
import Menu from './components/Menu';
import List from './components/List';

function App({ apiDetails }) {
  return (
    <Router>
      <div id="wrapper" className="h-full">
        <div id="left" className="h-screen bg-white shadow-md shadown-blue rtl">
          <Menu />
        </div>
        <div id="right" className="h-screen bg-blue-100 p-3">
          <Switch>
            <Route exact path="/list/:section">
              <List />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
