import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from './reducers';
//Components
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NotFound from './components/NotFound/NotFound';

//CSS
import './css/main.min.css';

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
          <Route path="/auth" exact>
            <Auth isSignup={isSignup} setIsSignup={setIsSignup} />
          </Route>
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
