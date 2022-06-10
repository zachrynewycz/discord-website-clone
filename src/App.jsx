import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nitro from './Pages/Nitro';
import Download from './Pages/Download';
import Safety from './Pages/Safety';

const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/download' element={<Download/>}/>
          <Route path='/nitro' element={<Nitro/>}/>
          <Route path='/safety' element={<Safety/>}/>
          <Route path='/blog'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;