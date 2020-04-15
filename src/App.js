import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import '../public/assets/css/bootstrap_simplex.min.css'
import './App.css';

function App() {

  const [navigator, setNavigator] = useState({ showNav: true }),
    toggleNav = () => setNavigator({ ...navigator, showNav: !navigator.showNav })

  return (
    <Router>
      <div>
        <Navbar toggleNav={toggleNav}/>
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
