import React from 'react';
import './styles/App.css';

import {SalesAndExpencesChartPage, UserListPage} from './Pages'

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Switch>
            <Route
              path='/'
              exact
              component={SalesAndExpencesChartPage}
            />
            <Route
              path='/list'
              exact
              component={UserListPage}
            />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
