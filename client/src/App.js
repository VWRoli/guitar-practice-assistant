import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Components
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

//CSS
import './css/main.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />

          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
