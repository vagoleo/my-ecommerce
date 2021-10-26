import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import NavBar from './components/NavBar';

// Views
import Home from './views/Home'
import CategoryPage from './views/CategoryPage';
import Cart from './views/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//Contexts
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/category/:id" component={CategoryPage} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
        </CartProvider>
    </Router>
  );
}

export default App;
