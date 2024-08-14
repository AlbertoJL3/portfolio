// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Arcade from './components/Arcade';
import Contact from './components/Contact';
import FibonacciAnimation from './components/fibonacciAnimation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Canvas>
          <FibonacciAnimation />
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/arcade" component={Arcade} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Canvas>
      </div>
    </Router>
  );
}

export default App;