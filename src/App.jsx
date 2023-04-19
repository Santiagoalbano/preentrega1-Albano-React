import './App.css';
import './styles/Navbar.css'
import Navbar from './Componentes/Navbar';
import Itemlistcontainer from './Componentes/Itemlistcontainer/Itemlistcontainer'



function App() {
  return (
  <>
  <Navbar />
  <Itemlistcontainer texto='Cliente' />
  </>
  );
}

export default App;
