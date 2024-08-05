import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Todo from './Pages/Todo'

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/todos' element={<Todo />}/>
        </Routes>
    </Router>
    </>
  )
}

export default App