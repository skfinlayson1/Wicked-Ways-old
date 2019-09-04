import React from 'react';
import './app.css';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />      
      </header>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
    </div>
  );
}

export default App;