import { useState } from 'react'
import { BrowserRouter as Router  , Route , Routes  } from 'react-router-dom'

import './App.css'
import SignIn from './Pages/Auth/Signin';

function App() {


  return (
    <div className="App">
        

        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Router>


    </div>
  )
}

export default App
