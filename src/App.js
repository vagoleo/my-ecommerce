import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import NavBar from './components/NavBar';

// Views
import Home from './views/Home'
import ItemPage from './views/ItemPage'
import CategoryPage from './views/CategoryPage';
import Cart from './views/Cart';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/item/:id" component={ItemPage} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
