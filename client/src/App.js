import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
//Components
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

//CSS
import './css/main.min.css';
import NotFound from './components/Error/NotFound';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.auth.authData);
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
