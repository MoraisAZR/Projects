import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Topnav from './components/topnav';
import Home from './components/home';
function App() {

  return (
    <>
      <Router>
<Topnav/>
<Home/>
      </Router>
    </>
  )
}

export default App
