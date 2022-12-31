import './App.css';
import Navs from './components/Nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navs/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
