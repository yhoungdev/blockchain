import { useState } from 'react'
import { BrowserRouter as Router  , Route , Routes  } from 'react-router-dom'

import './App.css'
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/SignUp';

function App() {


  return (
    <div className="App">
        

        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={< SignUp />} />
          </Routes>
        </Router>


    </div>
  )
}

export default App
