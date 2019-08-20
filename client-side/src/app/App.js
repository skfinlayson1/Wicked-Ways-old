import React from 'react';
import './app.css';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;