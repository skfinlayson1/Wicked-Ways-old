import React from 'react';
import './app.css';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProduct from './components/admin/Add-product';
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
      <Route path="/admin/add-product" component={AddProduct} />
    </div>
  );
}

export default App;