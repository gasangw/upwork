import './App.css';
import Home from './components/Home/Home';
import About from './components/about/About';
import BottomNav from './components/Nav/BottomNav';
import Categories from './components/category/Categories';
import Card1 from './components/cards/Card1';
import SecondCard from './components/cards/Card2';
import Footer from './components/footer/Footer';
import Card3 from './components/cards/Card3';

function App() {
  return (
    <div className="App">
      <BottomNav />
      <Home />
      <About />
      <Categories />
      <Card1 />
      <SecondCard />
      <Card3 />
      <Footer />
    </div>
  );
}

export default App;
