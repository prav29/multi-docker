import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>I am a Fibonacci calculator! </h1>
        <h2> <Link to="/">Home</Link>   </h2> 
        <h3> <Link to="/otherpage">Other Page</Link> </h3>
      </header>
        <div>
          <Route exact path="/" component={Fib} /> 
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
