import './App.css';
import Navbar from './components/Navbar';
import Cards from './pages/Cards';

function App() {
  return (
    <div className="App h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
