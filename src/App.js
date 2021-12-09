import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './post'
import Pagination from './pagination'
function App() {
  return (

     <Router>
     
        <Routes>
          <Route exact path="/" element={<Pagination/>}/>
          <Route exact path="/post" element={<Post/>}/>
 
        </Routes>
   
    </Router>

  )
}

export default App

