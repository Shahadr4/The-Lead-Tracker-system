import { useState } from 'react'
import Login from './Pages/Login'
import{BrowserRouter,Routes,Route}  from 'react-router-dom'
import ManagerDashBoard from './Pages/ManagerDashBoard'


function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<ManagerDashBoard/> }/>
      <Route path='/login' element={<Login/> }/>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
