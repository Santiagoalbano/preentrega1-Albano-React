import './App.css';
import './styles/Navbar.css'
import './styles/Itemcount.css'
import Navbar from './Componentes/Navbar';
import Itemlistcontainer from './Componentes/Itemlistcontainer/Itemlistcontainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Itemdetailcontainer from './Itemdetailcontainer/Itemdetailcontainer';



function App() {
  return (
 <div className='App'>
   <BrowserRouter>
    <Navbar />
   <Routes>
  <Route path='/'  element={<Itemlistcontainer/>}/>
  <Route path='/category/:categoryId' element={<Itemlistcontainer />}/>
  <Route path='/item/itemid' element={ <Itemdetailcontainer />}/>
  <Route path='*' element={<h1>404 not found</h1>} />
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
