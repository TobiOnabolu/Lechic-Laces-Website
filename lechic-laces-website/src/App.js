import './App.css';
import Home from './Components/Pages/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Swith>hello
        <Home/>
      </Swith>
      </Router>
    </div>
  );
}

export default App;
