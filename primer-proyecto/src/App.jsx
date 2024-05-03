import './App.css';
import BotonComponente from './components/BotonComponente'
import NavComponente from './components/NavComponente'
import TituloComponente from './components/TituloComponente'
import CartWidget from './components/CartWidget'
import ItemsListConteiner from './components/ItemListContainer';
function App() {

  return (
    <>
      <h1 className='titulo'>Ninna Bouttique</h1>
      <NavComponente/>
      <TituloComponente/>
      <CartWidget />
      <ItemsListConteiner/>
    </>
  );
}

export default App;
