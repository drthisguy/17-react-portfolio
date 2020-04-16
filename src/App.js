import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio/index'
import About from './pages/About/index'
import Contact from './pages/Contact/index'
import './assets/css/bootstrap_simplex.min.css'
import './App.css';

function App() {

  const [navigator, setNavigator] = useState({ showNav: false }),
    toggleNav = () => setNavigator({ ...navigator, showNav: !navigator.showNav })

  return (
    <Router>
      <div>
        <Navbar toggleNav={toggleNav} navState={navigator.showNav} id='navbarSupportedContent20'/>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
