import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';
import Home from './components/navbar/Home';
import Doctorhome from './components/navbar/Doctorhome';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctorhome' element={<Doctorhome/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
