import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';
import UserHome from './components/user/Home';
import DoctorHome from './components/doctor/Home';
import UserDashboard from './components/user/UserDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import Redirect from './components/others/Redirect';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Redirect />} />
      <Route path="/login" element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/user/dashboard' element={<UserDashboard/>}/>
      <Route path='/doctor/dashboard' element={<DoctorDashboard/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
