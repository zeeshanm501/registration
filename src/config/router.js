import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from '../pages/Admin/admin'
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import StdForm from '../pages/StdForm/StdForm'

function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<StdForm/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='admin/:id/*' element={<Admin/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter