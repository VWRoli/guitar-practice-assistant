import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { State } from './reducers';
//Components
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

//CSS
import './css/main.min.css';

const Auth = lazy(() => import('./components/Auth/Auth'));

function App() {
  const user = useSelector((state: State) => state.auth.authData);
  const [isSignup, setIsSignup] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <Home setIsSignup={setIsSignup} />
            )}
          </Route>
          <Suspense fallback={<div />}>
            <Route path="/auth" exact>
              <Auth isSignup={isSignup} setIsSignup={setIsSignup} />
            </Route>
          </Suspense>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
