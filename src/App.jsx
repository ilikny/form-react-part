// import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student from './pages/Student'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Student />}/>
      <Route path='/add-student' element={<AddStudent />}/>
      <Route path='/edit-student/:id' element={<EditStudent />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
