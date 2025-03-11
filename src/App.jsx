import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'
import Donation from './page/Donation';
import Profile from './page/Profile';


function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Signup' index element={<Signup />} />
    <Route path='/home' element={<Home />} />
    <Route path="/Donation" element={<Donation />} />
    <Route path="/Profile" element={<Profile />} />

      </Routes>
    </>
  )
}

export default App
