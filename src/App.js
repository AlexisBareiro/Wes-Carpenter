import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemDetailContainer/>
    <ItemListContainer greetings="Bienvenido"/>
    </>
  );
}

export default App;
