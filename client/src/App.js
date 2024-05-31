import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';
import UserHome from './components/user/Home';
import DoctorHome from './components/doctor/Home';
import UserDashboard from './components/user/UserDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import Redirect from './components/others/Redirect';
import { UserAppointment } from './components/user/UserAppointment';
import { AddUserAppointment } from './components/user/AddUserAppointment';
import { UserMedicalRecords } from './components/user/UserMedicalRecords';
import { UserPrescription } from './components/user/UserPerscription';
import { UserDoctor } from './components/user/UserDoctor';
import { UserPayment } from './components/user/UserPayment';
import { UserProfile } from './components/user/UserProfile';
import { DoctorTodayAppointment } from './components/doctor/DoctorTodayAppointment';
import { DoctorAppointment } from './components/doctor/DoctorAppointment';
import { DoctorMedicalRecords } from './components/doctor/DoctorMedialRedords';
import { DoctorPrescription } from './components/doctor/DoctorPrescription';
import { DoctorProfile } from './components/doctor/DoctorProfile';
import { DoctorLeave } from './components/doctor/DoctorLeave';
import { ViewUserAppointment } from './components/user/ViewUserAppointment';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Login & Register routes */}
      <Route path = "/"       element={<Redirect />} />
      <Route path="/login"    element={<Login />}/>
      <Route path='/register' element={<Register/>}/>

      {/* User Routes */}
      <Route path='/user/dashboard'             element={<UserDashboard/>}/>
      <Route path='/user/appointment'           element={<UserAppointment/>}/>
      <Route path='/user/appointment/new'       element={<AddUserAppointment/>}/>
      <Route path='/user/appointment/view/:id'  element={<ViewUserAppointment/>}/>
      <Route path='/user/medicalrecords'        element={<UserMedicalRecords/>}/>
      <Route path='/user/prescription'          element={<UserPrescription/>}/>
      <Route path='/user/doctors'               element={<UserDoctor/>}/>
      <Route path='/user/payments'              element={<UserPayment/>}/>
      <Route path='/user/profile'               element={<UserProfile/>}/>


      {/* Doctor routes */}
      <Route path='/doctor/dashboard'            element={<DoctorDashboard/>}/>
      <Route path='/doctor/appointment/today'    element={<DoctorTodayAppointment/>}/>
      <Route path='/doctor/appointment/'         element={<DoctorAppointment/>}/>
      <Route path='/doctor/appointment/view/:id' element={<DoctorDashboard/>}/>
      <Route path='/doctor/medicalrecords/'      element={<DoctorMedicalRecords/>}/>
      <Route path='/doctor/prescription//'       element={<DoctorPrescription/>}/>
      <Route path='/doctor/leave/'               element={<DoctorLeave/>}/>
      <Route path='/doctor/profile/'             element={<DoctorProfile/>}/>

      {/* Admin Routes */}
      <Route path='/admin/dashboard'            element={<DoctorDashboard/>}/>
      <Route path='/admin/appointment/new'      element={<DoctorDashboard/>}/>
      <Route path='/admin/appointment/today'    element={<DoctorDashboard/>}/>
      <Route path='/admin/appointment/'         element={<DoctorDashboard/>}/>
      <Route path='/admin/appointment/view/:id' element={<DoctorDashboard/>}/>
      <Route path='/admin/doctor/'              element={<DoctorDashboard/>}/>
      <Route path='/admin/patient/'             element={<DoctorDashboard/>}/>
      <Route path='/admin/medicalrecords/'      element={<DoctorDashboard/>}/>
      <Route path='/admin/prescription/'        element={<DoctorDashboard/>}/>
      <Route path='/admin/leave/'               element={<DoctorDashboard/>}/>
      <Route path='/admin/patient/new'          element={<DoctorDashboard/>}/>
      <Route path='/admin/doctor/new'           element={<DoctorDashboard/>}/>
      <Route path='/admin/payment/'             element={<DoctorDashboard/>}/>
      <Route path='/admin/reception/'           element={<DoctorDashboard/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
