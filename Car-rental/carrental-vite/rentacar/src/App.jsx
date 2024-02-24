
import './App.css';
import Navbar from './components/navbar';
import Hero from "./components/hero"
import Customer from './components/customer';
import Fleet from './components/fleet';
import Reviews from './components/reviews';
import Drop from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero/>
    <Customer/>
    <Fleet/>
    <Reviews/>
     <Drop/>
     <Footer/>
    </div>
  );
}

export default App;
