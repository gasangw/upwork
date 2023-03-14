import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import BottomNav from './components/Nav/BottomNav';

function App() {
  return (
    <div className="App">
      <BottomNav />
      <Home />
      <About />
    </div>
  );
}

export default App;
