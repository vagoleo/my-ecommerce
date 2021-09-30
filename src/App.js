import './App.css';

//Components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting='Bienvenido!' />

    </div>
  );
}

export default App;
