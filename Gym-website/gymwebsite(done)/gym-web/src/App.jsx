import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import "./App.css";
import Topnav from './components/topnav';
import About from "./components/pages/aboutsection/about";
import Gallery from "./components/pages/gallerysection/gallery"
import Home from "./components/pages/homepg"
import Pricing from './components/pages/pricingsection/pricingpg';
import Classes from './components/pages/classessection/classes';
import ScrollToTop from './components/scrolltop';
import Contact from './components/pages/contactsection/contact';


function App() {
  return (
    <>
    <Router> 
      <Topnav /> 
      <ScrollToTop/>
      <Routes>
          <Route path='/' element={<Home />} />       
          <Route path='/about' element={<About />} />  
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
    </Router>

 </>
  );
}

export default App;
