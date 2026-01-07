import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
function App() {
  return (
    <> 
    {/* <Home/>
    <About/> */}
     <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} /> 
         </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
