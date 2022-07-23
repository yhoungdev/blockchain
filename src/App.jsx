import { useState } from 'react'
import { BrowserRouter as Router  , Route , Routes  } from 'react-router-dom'

import './App.css'
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/SignUp';
import Homepage from './Pages/Homepage';

function App() {


  return (
    <div className="App">
        

        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={< SignUp />} />
            <Route path='/home' element={<Homepage/>} />
          </Routes>
        </Router>


    </div>
  )
}

export default App
