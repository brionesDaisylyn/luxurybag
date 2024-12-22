import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Products from './Products'; // Import the Products component
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} /> {/* Add Products route */}
        <Route path="/" exact component={Home} />  {/* Default route */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
