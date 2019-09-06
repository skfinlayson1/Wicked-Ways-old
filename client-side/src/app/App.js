import React from 'react';
import './app.css';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
        {/* fix this */}
        <p style={{margin: "0px"}}>p</p> 
      </header>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/product/:id" component={Product} />
    </div>
  );
}

export default App;