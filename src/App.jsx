import { useState } from 'react'
import { BrowserRouter as Router  , Route , Routes  } from 'react-router-dom'

import './App.css'
import UploadProject from './Pages/Admin/UploadProject';
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/SignUp';
import Homepage from './Pages/Homepage';
import ProjectView from './Pages/ProjectView';
import NotFound from './Pages/NotFound/NotFound';
import { useAuth0 } from '@auth0/auth0-react';


import { useEffect } from 'react';
function App() {



 

 

  return (
    <div className="App">
        

        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={< SignUp />} />
            <Route path='/home' element={<Homepage/>} />
            <Route path='/home/:id' element={<ProjectView/>} />
            <Route path='*' element={<NotFound/>} />

            <Route path='/user/admin/upload ' element={<UploadProject />} />
          </Routes>
        </Router>


    </div>
  )
}

export default App
