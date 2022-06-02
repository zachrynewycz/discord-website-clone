import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (  
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/download'/>
          <Route path='/nitro'/>
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