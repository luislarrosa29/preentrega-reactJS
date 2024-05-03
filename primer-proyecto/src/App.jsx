import './App.css';
import BotonComponente from './components/BotonComponente';
import NavComponente from './components/NavComponente';
import TituloComponente from './components/TituloComponente';
import CartWidget from './components/CartWidget';
function App() {

  return (
    <>
      <h1 className='titulo '> Ninna Bouttique</h1>
      <NavComponente/>
      <TituloComponente />
    </>
  );
}

export default App;
