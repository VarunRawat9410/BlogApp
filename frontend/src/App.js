import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Users from './pages/users'



const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
