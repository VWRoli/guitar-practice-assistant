import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//Components
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
//CSS
import './css/main.min.css';

import { getItems } from './actions/items';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      <main className="container">
        <Sidebar />
        <MainContent />
      </main>
    </div>
  );
}

export default App;
