import React,{Suspense} from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import {Spinner} from 'reactstrap'

const SalesAndExpencesChartPage = React.lazy(() => import('./Pages/SalesAndExpencesChartPage'));
const UserListPage = React.lazy(() => import('./Pages/UserListPage'))


const App = () => {
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Suspense
            fallback={
              <div className='spinner'>
                <Spinner
                  color='info'
                  style={{ width: '100px', height: '100px' }}/>
              </div>
            }
          >
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
          </Suspense>
        </div>
      </Router>

    </div>
  );
}

export default App;
