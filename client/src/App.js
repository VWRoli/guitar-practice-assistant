import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
//CSS
import './css/main.min.css';

function App() {
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
