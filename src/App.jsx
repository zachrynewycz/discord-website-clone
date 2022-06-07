import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nitro from './Pages/Nitro';

const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/download'/>
          <Route path='/nitro' element={<Nitro/>}/>
          <Route path='/safety'/>
          <Route path='/support'/>
          <Route path='/blog'/>
          <Route path='/careers'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;