import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/cart"> 
            <Header />
            <Cart /> 
          </Route>
          <Route path="/"> 
            <Header />
            <Home /> 
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
   
      // <h1>Choose between</h1>
      // <h3>The pain of DESCIPLINE </h3>
      // <h5>OR</h5>
      // <h3>The pain of REGRET</h3> 
  );
}

export default App;
