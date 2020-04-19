import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import work from './assets/portfolio.json'
import './assets/css/bootstrap_simplex.min.css'
import './App.css'

function App() {

  let [navigator, setNavigator] = useState(false)

  const toggleNav = () => setNavigator(navigator = !navigator)

  return (
    <Router>
      <div>
        <Navbar toggleNav={toggleNav} navState={navigator} />
        <Route exact path="/"> <Home portfolio={work} /> </Route>
        <Route exact path="/portfolio"> <Portfolio portfolio={work} /> </Route>
        <Route exact path="/about" ><About /> </Route>
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
