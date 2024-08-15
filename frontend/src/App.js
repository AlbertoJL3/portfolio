// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';

import Contact from './components/Contact';
import FibonacciAnimation from './components/fibonacciAnimation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Canvas>
            <Routes>
                <Route path="/projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Routes>
            
          </Canvas>
      </div>
    </Router>
  );
}

export default App;