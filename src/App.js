
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/Shop'  element={<Shop />} />
      </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
