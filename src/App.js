
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} exact/>
          <Route path='/services' element={<Services/>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
